import { ImageResponse } from 'next/server'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ marginTop: 40 }}>Hello, World</div>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          style={{
            width: '50%',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  )
}
