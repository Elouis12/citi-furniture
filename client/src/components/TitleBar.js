import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AiOutlineGlobal } from 'react-icons/ai';

function TitleBar() {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    if (currentLanguage === 'en') {
      i18n.changeLanguage('es');
    } else {
      i18n.changeLanguage('en');
    }
  };
  console.log(i18n.language);

  return (
    <div style={{ 
      backgroundColor: 'black', 
      height: '60px', 
      width: '100vw', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      color: 'white', 
      fontSize: '24px' 
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', marginLeft: '10px', textDecoration: 'none', color: 'white' }}>
        <img src="/decorAItor_logo-removebg-preview.png" alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
        {t('DecorAItor')}  
      </Link>

      <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
          {t('Home')}  
        </Link>
        <Link to="/about" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
          {t('AboutUs')}
        </Link>
        <Link to="/partners" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
          {t('Our Partners')}
        </Link>
        <div onClick={toggleLanguage} style={{ cursor: 'pointer', marginRight: '10px', display: 'flex', alignItems: 'center' }}>
          <AiOutlineGlobal size={24} /> 
        </div>
      </div>
      
      {/* This is an empty placeholder to maintain space-between justification */}
      <div style={{ marginRight: '10px' }}></div>
    </div>
    
  );


}

export default TitleBar;
