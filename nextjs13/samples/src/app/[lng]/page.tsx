import { useTranslation } from '../i18n'
import { Footer } from './components/Footer'
import { LanguageChoose } from './components/LanguageChoose'
import { LoginForm } from './components/LoginForm'

export default async function Home({
  params: { lng },
}: {
  params: { lng: string }
}) {
  const { t } = await useTranslation(lng)
  return (
    <>
      <h1>{t`title`}</h1>
      <LoginForm />
      <Footer />
      <LanguageChoose />
    </>
  )
}
