import { use } from 'react'
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'


export default async function AsyncAbout() {
	// {params}
	// const {locale} = use(params);

	// // Enable static rendering
	// setRequestLocale(locale);

	// Once the request locale is set, you
	// can call hooks from `next-intl`
	const t = await getTranslations('AsyncAbout')

	return (
		<div>
			<h1>{t('title')}</h1>
		</div>
	)
}
