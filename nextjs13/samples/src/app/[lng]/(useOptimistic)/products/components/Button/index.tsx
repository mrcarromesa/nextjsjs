import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function Button() {
  const { pending } = useFormStatus()
  return <button type="submit">{pending ? 'Loading...' : 'Send'}</button>
}
