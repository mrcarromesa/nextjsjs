import { render, screen } from "@testing-library/react";
import { useSession } from 'next-auth/react';
import { useRouter } from "next/router";
import Post, { getStaticProps } from "../../pages/posts/preview/[slug]";
import { getPrismicClient } from '../../services/prismic';

const post = { slug: 'my-new-post', title: 'My New Post', content: '<p>Post excerpt</p>', updateAt: '10 de Abril'};

jest.mock('../../services/prismic');
jest.mock('next-auth/react');
jest.mock('next/router');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Post Preview Page', () => {
  it('render correctly', () => {
    jest.mocked(useSession).mockReturnValue({
      data: null,
    } as any) ;
    render(<Post post={post} />);

    expect(screen.getByText('My New Post')).toBeInTheDocument();
    expect(screen.getByText('Post excerpt')).toBeInTheDocument();
    expect(screen.getByText('Wanna continue reading?')).toBeInTheDocument();
  });

  it('redirects user to full post when user is subscribed', async () => {

    jest.mocked(useSession).mockReturnValue({
      data: {
        activeSubscription: 'fake-active-subscription'
      }
    } as any);

    const pushMocked = jest.fn();
    jest.mocked(useRouter).mockReturnValue({
      push: pushMocked,
    } as any);

    render(<Post post={post} />);

    expect(pushMocked).toBeCalledWith('/posts/my-new-post');
  });

  it('loads initial data', async () => {

    jest.mocked(getPrismicClient).mockReturnValue({
      getByUID: jest.fn().mockResolvedValue({
        data: {
          title: [
            { type: 'heading', text: 'My new post' }
          ],
          content: [
            { type: 'paragraph', text: 'Post content' }
          ]
        },
        last_publication_date: '04-01-2021'
      })
    } as any);

    const response = await getStaticProps({
      params: { slug: 'my-new-post' }
    })

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'my-new-post',
            title: 'My new post',
            content: '<p>Post content</p>',
            updatedAt: '01 de abril de 2021'
          }
        }
      })
    );

  });

});