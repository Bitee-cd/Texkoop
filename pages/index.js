import Head from 'next/head'
import Footer from '../components/Footer'
import useTranslation from 'next-translate/useTranslation'




export default function Home() {

   const { t, lang } = useTranslation('common')
 



  return (
    <div>
      

      <p>{t('variable-example', { count: 42 })}</p>
    

      
      
     
    </div>
  )
}

