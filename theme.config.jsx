const siteTitle = 'Phormal: form generation, themes and validation for web artisans';
const siteDescription = 'Schema based form generator | multi-language support | built in validation | dark mode support | right-to-left support | compatible with React, Vue, Svelte and more';

export default {
  logo: <span>Phormal</span>,
  project: {
    link: 'https://github.com/phormal/phormal',
  },
  darkMode: false,
  docsRepositoryBase: 'https://github.com/phormal/phormal/tree/master/docs',
  feedback: {
    content: null,
  },
  footer: {
    text: <span>
      MIT {new Date().getFullYear()} © <a href="https://github.com/tomosterlund" target="_blank">Tom Österlund</a>.
    </span>,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Phormal',
      description: siteDescription,
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
    </>
  )
}