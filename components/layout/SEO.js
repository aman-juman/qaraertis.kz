import Head from 'next/head'

export const SEO = ({title = "Кара Ертис"}) => {
    const description = "Кара Ертис - Крестьянское хозяйство"
    const keywords = "Кара Ертис Байыс Жаба Акбас"
    const siteURL = "https://qaraertis.kz/";
    const imagePreview = `${siteURL}/${process.env.siteImagePreviewUrl}`

    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta property="vk:title" content="Кара Ертис - Крестьянское хозяйство"/>
            <meta property="vk:text" content="Кара Ертис - Крестьянское хозяйство"/>
            <meta property="vk:url" content="https://minarasan.kz/" />
            {/* Twitter */}

            {/* Open Graph */}
            <meta property="og:url" content={siteURL} key="ogurl"/>
            <meta property="og:image" content={imagePreview} key="ogimage"/>
            <meta property="og:site_name" content={siteURL} key="ogsitename"/>
            <meta property="og:title" content={title} key="ogtitle"/>
            <meta property="og:description" content={description} key="ogdesc"/>
            <title>{title}</title>

            <link rel="manifest" href="/manifest.json"/>
            <link rel="apple-touch-icon" href="/apple-icon.png"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lobster&family=Montserrat+Alternates:wght@400;500;600;700&family=Montserrat:wght@400;500;700&display=swap"
                rel="stylesheet" />
            <meta name="theme-color" content="#FFFFFF"/>

        </Head>
    )
}

