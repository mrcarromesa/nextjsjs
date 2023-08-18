import useTranslation from 'next-translate/useTranslation'

import { Login } from "./home/components/Login";

export const revalidate = 10;

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <main>
      <h1>{t('title')}</h1>
      <Login />
    </main>
  )
}
