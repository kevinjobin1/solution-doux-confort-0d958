import type { CookieConsentConfig } from 'vanilla-cookieconsent';

/**
 * Enable suggestions
 * @type {import('vanilla-cookieconsent').CookieConsentConfig}
 */
const pluginConfig: CookieConsentConfig = {
    cookie: {
        name: 'cookie_consent',
    },
  guiOptions: {
    
    consentModal: {
      layout: 'box',
      position: 'bottom left',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      position: 'left',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  onFirstConsent: function () {
    console.log('onFirstAction fired');
  },

  onConsent: function ({ cookie }) {
    console.log('onConsent fired ...');
  },

  onChange: function ({ changedCategories, cookie }) {
    console.log('onChange fired ...');
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    functional: {
      readOnly: false,
      enabled: false,
    },
    performance: {
      readOnly: false,
      enabled: false,
    },
    advertising: {
      readOnly: false,
      enabled: false,
    },
    analytics: {
      readOnly: false,
      enabled: true,
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/,
          },
        ],
      },
    },
  },

  language: {
    default: 'fr',

    translations: {
      fr: {
        consentModal: {
          title: "Utilisation des cookies",
          description:
            `<div style="display: flex; flex-direction: column; gap: 15px; padding: 10px 0; text-align: left;">
            <p style="margin-bottom: 0; line-height: 1.5; font-size: 14px;">Nous utilisons des cookies afin d\'améliorer l\'expérience de navigation, diffuser du contenu personnalisés et analyser le trafic web.</p>
            <p style="margin-bottom: 0; line-height: 1.5; font-size: 14px;"> En cliquant sur <strong>"Tout accepter"</strong>, vous consentez à l\'utilisation de tous les cookies.</p>
            </div>`,
          acceptAllBtn: 'Accepter tout',
          acceptNecessaryBtn: 'Tout rejeter',
          showPreferencesBtn: 'Personnaliser',
          //closeIconLabel: 'Fermer',
          // footer: `
          //   <a href="/confidentialite">Politique de confidentialité</a>
          // `,
        },
        preferencesModal: {
          title: 'Personnaliser les préférences de confidentialité',
          acceptAllBtn: 'Accepter tout',
          acceptNecessaryBtn: 'Tout rejeter',
          savePreferencesBtn: 'Enregistrer les préférences',
  
          //closeIconLabel: 'Fermer',
          sections: [
            {
              title: 'Utilisation des cookies',
              description:
                `Nous utilisons des cookies pour vous aider à naviguer efficacement et à exécuter certaines fonctions. Vous trouverez ci-dessous des informations détaillées sur tous les cookies sous chaque catégorie de consentement.
                
                Les cookies classés comme « Nécessaires » sont stockés sur votre navigateur car ils sont essentiels pour activer les fonctionnalités de base du site.
                
                Nous utilisons également des cookies tiers qui nous aident à analyser la façon dont vous utilisez ce site Web, à stocker vos préférences et à fournir le contenu et les publicités qui vous intéressent. Ces cookies ne seront stockés dans votre navigateur qu'avec votre consentement préalable.
                
                Vous pouvez choisir d'activer ou de désactiver tout ou partie de ces cookies, la désactivation de certains d'entre eux peut cependant affecter votre expérience de navigation.`,
            },
             {
              title: 'Nécessaire',
              description: 'Les cookies nécessaires sont requis pour activer les fonctionnalités de base de ce site et pour l\'ajustement de vos préférences de consentement. Ces cookies ne stockent aucune donnée personnelle identifiable.',
              linkedCategory: 'necessary',
              cookieTable: {
                headers: {
                  name: 'Nom',
                  domain: 'Service',
                  description: 'Description',
                  expiration: 'Expiration',
                },
                body: [
                  {
                    name: 'cookie_consent',
                    domain: 'solutiondouxconfort.com',
                    description:
                      'Préférences de consentement de l\'utilisateur.',
                    expiration: 'Session',
                  },
                ],
              },
            },
            {
              title: 'Fonctionnel',
              description: 'Les cookies fonctionnels aident à assurer le bon fonctionnement de certaines fonctionnalités telles que le partage du contenu du site Web sur les plateformes de réseaux sociaux et d\'autres fonctionnalités tierces.',
              linkedCategory: 'functional',
            },
            {
              title: 'Analytique',
              description: 'Les cookies analytiques sont utilisés pour comprendre comment les visiteurs interagissent avec le site Web. Ces cookies aident à fournir des informations sur des mesures telles que le nombre de visiteurs, le taux de rebond, la source du trafic, etc.',
              linkedCategory: 'analytics',
              cookieTable: {
                headers: {
                  name: 'Nom',
                  domain: 'Service',
                  description: 'Description',
                  expiration: 'Expiration',
                },
                body: [
                  {
                    name: '_ga',
                    domain: 'Google Analytics',
                    description:
                      'Cookie analytique défini par Google',
                    expiration: 'Expire après 12 jours',
                  },
                  {
                    name: '_gid',
                    domain: 'Google Analytics',
                    description:
                      'Cookie analytique défini par Google',
                    expiration: 'Session',
                  },
                ],
            },
            },
            {
              title: 'Performance',
              description: 'Les cookies de performance sont utilisés pour comprendre et analyser les principaux indices de performance du site Web, ce qui contribue à offrir une meilleure expérience utilisateur aux visiteurs.',
              linkedCategory: 'performance',
            },
             {
              title: 'Publicitaire',
              description: 'Les cookies publicitaires sont utilisés pour personnaliser les annonces selon vos intérêts. Ils sont également utilisés pour limiter le nombre de fois que vous voyez une publicité et pour mesurer l\'impact positif des campagnes publicitaires.',
              linkedCategory: 'advertising',
            },
            {
              title: 'Plus d\'informations sur la confidentialité',
              description:
                'Pour toute question concernant notre politique de confidentialité et vos choix, veuillez <a class="cc__link" href="/contact">Nous contacter</a>.',
            },
          ],
        },
      },
    },
  },
};

export default pluginConfig;
