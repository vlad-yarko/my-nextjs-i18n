"use client"

import { useTranslations } from 'next-intl'


export default function ClientPage() {

    const t = useTranslations('ClientPage')

    return (
        <div>
            <h1>{t("title")}</h1>
        </div>
    )
}
