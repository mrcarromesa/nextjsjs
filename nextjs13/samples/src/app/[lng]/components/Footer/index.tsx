'use client'
import { useEffect, useState } from 'react'

import { useTranslation } from '@/app/i18n/client'

export const Footer = () => {
  const { t } = useTranslation('common')
  const [can, setCan] = useState(false)
  useEffect(() => {
    setCan(true)
  }, [])
  return (
    <>
      {/* { can &&  */}
      <i>
        {t('title')} - {t('test', { myVar: 'certo?' })}
      </i>
      {/* } */}
    </>
  )
}
