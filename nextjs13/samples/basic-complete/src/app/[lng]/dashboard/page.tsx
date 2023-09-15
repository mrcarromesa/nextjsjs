import Link from 'next/link'
import { Logout } from '../components/Logout'

export default function Page() {
  console.log('env', process.env.MY_ENV)
  return (
    <>
      <h1>Dashboard</h1>
      <Link href="/aboout">OI</Link>
      Aqui - {process.env.MY_ENV} $ Aqui - {process.env.NEXT_PUBLIC_OTHER_ENV} $
      <Logout />
    </>
  )
}
