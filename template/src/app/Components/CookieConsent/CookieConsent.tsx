import React, { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import "vanilla-cookieconsent/dist/cookieconsent.css";
import pluginConfig from './CookieConsentConfig';
import Link from 'next/link';

const CookieConsentComponent = () => {
  useEffect(() => {
    CookieConsent.run(pluginConfig);
  }, []);

  return (
     <Link className="text-decoration-none cs_white_color" onClick={CookieConsent.showPreferences} href="#">Préférences de confidentialité </Link>
  );
};

export default CookieConsentComponent;
