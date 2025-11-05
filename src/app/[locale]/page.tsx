// import { useTranslations } from "next-intl"


// export default function HomePage() {

//     const t = useTranslations("HomePage")

//     return (
//         <div>
//             <h1>{t("title")}</h1>
//             <p>{t("content")}</p>
//         </div>
//     )
// }


import {use} from 'react';
import {setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';


export default function IndexPage() {
	// {params}
	// const {locale} = use(params);

	// // Enable static rendering
	// setRequestLocale(locale);

	// Once the request locale is set, you
	// can call hooks from `next-intl`
	const t = useTranslations('HomePage')

	return (
		<div>
			<h1>{t('title')}</h1>
			<p>{t('content')}</p>
		</div>
	)
}
