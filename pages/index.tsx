import Head from 'next/head'
import about from "../public/images/about.jpg"
import cloud from "../public/images/cloud.jpg"
import banner1 from "../public/images/banner-1.jpg"
import banner2 from "../public/images/banner-2.jpg"
import logo from "../public/logos/logo_white (2).png"
import Image from "next/image"
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import React from 'react'
import Link from "next/link"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { sendContactForm } from "./api/contact";

const _phoneProps = {
    name: 'phone',
    required: true,
    autoFocus: true
}

const bannerImages = [banner1, banner2]
const backupImage = 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

export default function Home() {
    const [_document, set_document] = React.useState(null)
    const [_phoneValue, set_phoneValue] = React.useState()
    const [message, setMessage] = React.useState("");
    const formRef = React.useRef<HTMLFormElement>(null)

    React.useEffect(() => {
        // @ts-ignore
        set_document(document)
    }, [])

    function goToSection(elementId: string) {
        if (typeof window !== "undefined") {
            const section = document.getElementById(elementId)
            section?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    async function submitContact(e: any) {
        e.preventDefault();
        console.log(e);
        const res = await sendContactForm({
            name: e.target[0].value,
            surname: e.target[1].value,
            email: e.target[2].value,
            mobileNumber: e.target[3].value,
            date: e.target[4].value,
            venue: e.target[5].value,
            message: e.target[6].value,
        });
        if (res == 0) {
            setMessage("Thank you for your valuable comment!");
            if (typeof window !== "undefined" && formRef) {
                // @ts-ignore
                formRef.current.reset();
            }
        } else {
            setMessage("Something went wrong! Please try again");
        }
    }

    // function switchBanner() {
    //     if (typeof window !== "undefined") {
    //         let timer = 0
    //         let index = 1
    //         const bannerElement = document.getElementById('banner')
    //         setInterval(function() {
    //             if (bannerElement) bannerElement.style.backgroundImage = bannerElement ? `url('${bannerImages[index].src}')` : `url('${backupImage}')`
    //             index = (index + 1) % bannerImages.length
    //             timer = timer + 2000
    //         }, 5000)
    //     }
    // }
    // switchBanner()

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div className="flex flex-col min-h-screen justify-between">
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

            <main>
                <section id="hero">
                    <div id="banner" style={{ backgroundImage: `url('${banner1.src}')` }}
                         className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover h-96 lg:h-screen bg-center">
                        <div
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed flex flex-col">
                            <header>
                                <div className="flex justify-center items-center align-top">
                                    <Link href="/">
                                        <Image
                                            alt={'Keanu Ellwood Photography logo'}
                                            src={logo.src}
                                            width={600}
                                            height={200}
                                        />
                                    </Link>
                                </div>
                            </header>
                            <div className="flex justify-center items-center flex-grow">
                                <div className="text-white" onClick={() => goToSection("contact")}>
                                    <span
                                        className="font-meta inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                        role="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light">
                                        Contact Me</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="bg-gray-200">
                    <div
                        className="flex md:flex-row items-center lg:py-16 py-8 pb-0 justify-center container m-auto flex-col">
                        <div className="flex flex-col font-body text-black self-stretch"
                             style={{ textAlign: 'center' }}>
                            <h3 className="font-header text-5xl">About Me</h3>
                            <div className="font-body italic flex flex-col p-5 about-me">
                                <p>Firstly and most importantly thank you for taking the time to come and visit my page.
                                    Iʼm Keanu.</p>

                                <p>I have been a professional photographer for the last couple of years. My unique style
                                    and warm personality will create images that will melt your heart.</p>

                                <p>I am based in Pretoria, South Africa covering all aspects of photography, such as
                                    Family Portraits, Babies, Weddings, P.R, Fashion, Glamour, & Commercial.</p>

                                <p>I am available for any type of photography project that you have in mind, I am happy
                                    to accommodate you anywhere in the world.</p>
                            </div>
                        </div>
                        <div className="lg:p-2">
                            <Image
                                alt={'About Me Section Portrait'}
                                src={about.src}
                                width={400}
                                height={600}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                <section id="contact" className="bg-no-repeat bg-cover bg-center"
                         style={{ backgroundImage: `url('${cloud.src}')` }}>
                    <div
                        className="flex md:flex-row items-center lg:py-16 py-8 justify-center container m-auto flex-col">
                        <div className="flex flex-col flex-wrap font-body text-black self-stretch">
                            <div style={{ textAlign: 'center' }}>
                                <div className="w-full">
                                    <p className="font-body font-meta italic">get in touch with me</p>
                                    <h3 className="font-header text-5xl">Contact Me</h3>
                                </div>
                                <div className="w-full">
                                    <div className="font-body italic flex flex-col p-5 about-me">
                                        <p>Before we both get excited and in order to give you a quote, I need to know
                                            more
                                            about your Special Day.</p>
                                        <p>Please complete the form below, including your contact information, details
                                            of
                                            your wedding day arrangements and any useful information about your
                                            photography
                                            requirements.</p>
                                        <p>A member of our production team will be in contact to discuss your wedding
                                            photography as soon as possible.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full m-auto xl:px-14 p-5">
                                <form className="w-full"
                                      ref={formRef}
                                      onSubmit={submitContact}>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="name">
                                                First Name
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="name" type="text" placeholder="Jane" required/>
                                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="surname">
                                                Surname
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="surname" type="text" placeholder="Doe"/>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="email">
                                                E-mail
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="email" type="email" required/>
                                            <p className="text-gray-600 text-xs italic">Please enter a valid email.</p>
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <div className="mb-3">
                                                <label
                                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                    Your Mobile Number
                                                </label>
                                                <PhoneInput
                                                    inputClass="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    country={'za'}
                                                    value={_phoneValue}
                                                    onChange={() => set_phoneValue}
                                                    specialLabel="Your Mobile Number"
                                                    inputProps={_phoneProps}
                                                    inputStyle={{ height: '46px', width: '100%' }}
                                                />
                                            </div>
                                            <p className="text-gray-600 text-xs italic">Please enter a valid mobile
                                                number.</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="date">
                                                Shoot Date
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="date" type="date" required/>
                                            <p className="text-gray-600 text-xs italic">Please provide the date you want
                                                to schedule a shoot.</p>
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="venue">
                                                Have a venue in mind?
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="venue" type="text"/>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="message">
                                                Message
                                            </label>
                                            <textarea
                                                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                                id="message" required></textarea>
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center">
                                        <div className="md:w-1/3">
                                            <button
                                                className="font-meta shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                                type="submit">
                                                Send
                                            </button>
                                        </div>
                                        <div className="md:w-2/3"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="locations" className="bg-gray-200">
                    <div
                        className="flex md:flex-row items-center lg:py-16 py-8 lg:px-0 px-5 justify-center container m-auto flex-col">
                        <div className="flex flex-col w-full flex-wrap font-body text-black self-stretch"
                             style={{ textAlign: 'center' }}>
                            <div className="font-body italic flex flex-col about-me">
                                <p>Photographer in Pretoria, Centurion, Johannesburg, Durban, Cape Town, Gqeberha.</p>
                                <h3 className="font-header text-xl font-bold">Weddings</h3>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <p>It doesn't matter where your wedding is in the world; it would be an honor and a
                                    privilege for me to be a part of your special day.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <section className="bg-gray-200">
                    <div className="flex justify-center items-center object-cover">
                        <Image
                            alt={'Keanu Ellwood Photography Banner 2'}
                            src={banner2.src}
                            width={640}
                            height={427}
                            className="shrink-0 min-w-max min-h-max"
                        />
                    </div>
                    <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                            <div className="px-5 py-2" onClick={() => goToSection("about")} role="button">
                                <span className="text-base leading-6 text-gray-500 hover:text-gray-900">About Me</span>
                            </div>
                            <div className="px-5 py-2" onClick={() => goToSection("gallery")} role="button">
                                <span className="text-base leading-6 text-gray-500 hover:text-gray-900">Gallery</span>
                            </div>
                            <div className="px-5 py-2" onClick={() => goToSection("contact")} role="button">
                                <span className="text-base leading-6 text-gray-500 hover:text-gray-900">Contact</span>
                            </div>
                        </nav>
                        <div className="flex justify-center mt-8 space-x-6">
                            <a href="https://www.linkedin.com/in/keanu-ellwood-b94497158/" target="_blank"
                               rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">LinkedIn</span>
                                <BsLinkedin/>
                            </a>
                            <a href="https://www.instagram.com/keanuellwood/" target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Instagram</span>
                                <BsInstagram/>
                            </a>
                            <a href="https://github.com/Keanu-Ellwood-DVT" target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">GitHub</span>
                                <BsGithub/>
                            </a>
                        </div>
                        <div className="mt-8 text-base leading-6 text-center text-gray-400">
                            <p>Keanu Ellwood Photography</p>
                            <p>Pretoria, South Africa</p>
                            <p>0815620090</p>
                            <p>keanuellwoodphotography@gmail.com</p>
                            <p>© 2023 Keanu Ellwood Photography, Inc. All rights reserved.</p>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}

// isValid={(inputNumber: string, _country, countries) => {
//     return countries.some((country) => {
//         return startsWith(inputNumber, country.dialCode) || startsWith(country.dialCode, inputNumber);
//     });
// }}