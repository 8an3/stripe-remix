export default {
    site: {
      title: '',
      description: '',
      themeColor: '',
      siteUrl: '',
      siteName: '',
      twitterHandle: '',
      language: 'en',
    },
    paths: {
      signIn: '/auth/sign-in',
      signUp: '/auth/sign-up',
      emailLinkSignIn: '/auth/link',
      onboarding: `/onboarding`,
      appHome: '/tasks',
      settings: {
        profile: '/settings/profile',
        authentication: '/settings/profile/authentication',
        email: '/settings/profile/email',
        password: '/settings/profile/password',
      },
      api: {
        checkout: `/resources/stripe/checkout`,
        billingPortal: `/resources/stripe/portal`,
      },
      searchIndex: `/public/search-index`,
    },
    firebase: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
    auth: {
      // Enable MFA. You must upgrade to GCP Identity Platform to use it.
      // see: https://cloud.google.com/identity-platform/docs/product-comparison
      enableMultiFactorAuth: true,
      // NB: Enable the providers below in the Firebase Console
      // in your production project
      providers: {
        emailPassword: true,
        phoneNumber: false,
        emailLink: false,
        oAuth: [GoogleAuthProvider],
      },
    },
    appCheckSiteKey: process.env.APPCHECK_KEY,
    navigation: {
      style: NavigationStyle.TopHeader,
    },
    email: {
      host: '',
      port: 0,
      user: '',
      password: '',
    },
    emailEtherealTestAccount: {
      email: process.env.ETHEREAL_EMAIL,
      password: process.env.ETHEREAL_PASSWORD,
    },
    environment: process.env.VERCEL_ENV ?? 'development',
    emulatorHost: process.env.EMULATOR_HOST,
    emulator: process.env.EMULATOR === 'true',
    production: process.env.NODE_ENV === 'production',
    stripe: {
      products: [
        {
          name: 'Basic',
          description: 'Describe your basic plan',
          plans: [
            {
              price: '$249/year',
              stripePriceId: '<STRIPE_PRICE_ID>',
            }
          ],
        },
        {
          name: 'Pro',
          description: 'Describe your pro plan',
          plans: [
            {
              price: '$249/year',
              stripePriceId: '<STRIPE_PRICE_ID>',
            }
          ],
        },
      ],
    },
  };