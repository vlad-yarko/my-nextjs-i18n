import {use} from 'react';
import {setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';


export default function IndexPage() {
    // const {locale} = use(params);
    
    // // Enable static rendering
    // setRequestLocale(locale);
    
    // Once the request locale is set, you
    // can call hooks from `next-intl`
    const t = useTranslations('AboutPage');
    
    return (
            <div>
                <h1></h1>
            </div>
        )
}
