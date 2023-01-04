import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div>
            <Head>
                <title>Keanu Ellwood Photography</title>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>
                <meta name="description" content="Welcome to my photography website and store!"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="manifest" href="/icon/manifest.json"/>
                <link rel="icon" href="/icon/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="57x57" href="/icon/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/icon/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/icon/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/icon/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/icon/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/icon/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/icon/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/icon/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192" href="/icon/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/icon/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png"/>
            </Head>
            <main className="text-red-500">
                <p>Placeholder for Main</p>
            </main>
            <footer>
                <p>Placeholder for footer</p>
            </footer>
        </div>
    )
}
