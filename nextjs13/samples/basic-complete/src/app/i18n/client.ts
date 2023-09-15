'use client'

import { useEffect, useState } from 'react'
import { setCookie, getCookie } from 'cookies-next'
import { useParams } from 'next/navigation'
import i18next from 'i18next'
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions, languages, cookieName, fallbackLng } from './settings'

const runsOnServerSide = typeof window === 'undefined'

function initializeI18n() {
  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init({
      ...getOptions(),
      lng: undefined,
      detection: {
        order: ['path', 'htmlTag', 'cookie', 'navigator'],
      },
      preload: runsOnServerSide ? languages : [],
    })
}

initializeI18n()

function useTranslationDetection(
  ns: string,
  options?: Record<string, unknown>
) {
  const { lng = fallbackLng } = useParams() || { lng: fallbackLng }
  const lang = lng as string
  const ret = useTranslationOrg(ns, options)
  const { i18n } = ret

  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)

  useEffect(() => {
    if (activeLng === i18n.resolvedLanguage) return
    setActiveLng(i18n.resolvedLanguage)
  }, [activeLng, i18n.resolvedLanguage])

  useEffect(() => {
    if (!lang || i18n.resolvedLanguage === lang) return
    i18n.changeLanguage(lang)
  }, [lang, i18n])
  useEffect(() => {
    if (getCookie(cookieName) === lang) return
    setCookie(cookieName, lang, { path: '/' })
  }, [lang])

  return ret
}

const translation = useTranslationDetection

export function useTranslation(ns: string, options?: Record<string, unknown>) {
  const { lng = fallbackLng } = useParams() || { lng: fallbackLng }
  const lang = lng as string
  const ret = useTranslationOrg(ns, options)
  const { i18n } = ret

  if (runsOnServerSide && lang && i18n.resolvedLanguage !== lang) {
    i18n.changeLanguage(lang)
    return ret
  }

  return translation(ns, options)
}
