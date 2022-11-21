import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Footer from '../components/Footer'


const About = () => {
    const { t, lang } = useTranslation('about')
    
  return (
    <div>
        <p>{t('about')}</p>

    </div>
  )
}

export default About

export async function getStaticProps({locale}){
    let about = 
    locale === 'en-US' 
    ? 'English my g'
    : locale ==='fr'
    ? 'french nigga'
    :""
    return {
      props :{
        about
      }
    }
  }
  