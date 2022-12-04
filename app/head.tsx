import Head from 'next/head'
import Script from 'next/script'

function IndexPage() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Script src="https://example.com/script.js" />
    </>
  )
}

export default IndexPage