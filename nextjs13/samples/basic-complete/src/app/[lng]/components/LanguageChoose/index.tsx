'use client'

import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, fallbackLng } from '@/app/i18n/settings'
import { useParams } from 'next/navigation'
import { useTranslation } from '@/app/i18n/client'

export const LanguageChoose = () => {
  const { lng: lang = fallbackLng } = useParams() || { lng: fallbackLng }
  const { t } = useTranslation('common')
  const lng = lang as string
  return (
    <></>
    // <footer style={{ marginTop: 50 }}>
    //   <Trans i18nKey="languageSwitcher" t={t}>
    //     Switch from <strong>{lng}</strong> to:{' '}
    //   </Trans>
    //   {languages.filter((l) => lng !== l).map((l, index) => {
    //     return (
    //       <span key={l}>
    //         {index > 0 && (' or ')}
    //         <Link href={`/${l}`}>
    //           {l}
    //         </Link>
    //       </span>
    //     )
    //   })}
    // </footer>
  )
}
