"use client";
import { Form } from '@/components/Form';
import { Portal } from '../components/Portal';

export default function Home() {
  return (
    <main>
      <Portal />
      <div>
        <Form>
          {({ values, handleChange }) => (
            <>
              <input 
                className='text-black'
                value={values['key']}
                onChange={(e) => handleChange('key', e.target.value)}
              />
              {values['key']}
            </>
          )}
        </Form>
      </div>
    </main>
  )
}
