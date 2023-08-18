import useTranslation from "next-translate/useTranslation";
import { Logout } from "../home/components/Logout";

export default function Dashboard() {
  const { t } = useTranslation('common')
  return (
    <>
      <h1>Dashboard - {t('title')}</h1>
      <Logout />
    </>
  )
}