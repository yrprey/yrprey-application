import Head from "next/head";

import { ISeo } from "@/interfaces/ISeo/ISeo";

const SEO = ({ title, description }: ISeo) => {

    return (
        <Head>
            <meta name="author" content="Vagner Mengali" />
            <meta name="keywords" content="Javascript" />
            <link rel="fluid-icon" href={"/logo.webp"} title="YRPrey" />
            <link rel="icon" type="image/svg+xml" href={"/logo.webp"} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{`${title}`}</title>
            <link rel="shortcut icon" href={"/logo.webp"} type="image/x-icon" />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="YRPrey" />
            <meta property="og:type" content="website" key="ogtype" />
            <meta property="og:url" content="http://yrprey.com/" />
            <meta property="og:image:alt" content="YYRPrey is a Brazilian site for security and vulnerability testing." />
            <meta property="og:image" content="/background-banner.webp" />
            <meta name="twitter:title" content="YRPrey" />
            <meta name="twitter:site" content="@vagnermengali" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={"/background-banner.webp"} />
            <meta name="twitter:description" content="YYRPrey is a Brazilian site for security and vulnerability testing." />
            <meta property="al:ios:app_name" content="YRPrey" />
            <meta property="al:ios:url" content="http://yrprey.com/" />
            <meta property="al:android:app_name" content="YRPrey" />
            <meta property="al:android:url" content="http://yrprey.com/" />
            <link rel="canonical" href="http://yrprey.com/" />
        </Head>
    );
};

export default SEO;