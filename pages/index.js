import Head from 'next/head';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import deved from '../public/dev-ed-wave.png';
import code from '../public/code.png';
import design from '../public/design.png';
import consulting from '../public/consulting.png';
import Image from 'next/image';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import Link from 'next/link';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <Head>
                <title>Aman Saxena</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
                <section className="min-h-screen">
                    <nav className="py-10 mb-12 flex justify-between dark:text-white">
                        <h1 className="font-burtons text-xl">developedbyed</h1>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={() => setDarkMode(!darkMode)}
                                    className=" cursor-pointer text-2xl"
                                />
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                                    href="https://media.licdn.com/dms/document/D562DAQFaAYn79XRMkg/profile-treasury-document-pdf-analyzed/0/1682668350827?e=1683763200&v=beta&t=IZj3ARiFF-BrgJg8_jYSsvQQm5Pm_6-4wTHZE6cqFms"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div data-aos="fade-down" className="text-center p-10 py-10">
                        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                            Aman Saxena
                        </h2>
                        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                            Frontend Engineer
                        </h3>
                        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                            I help startups and companies build their products in early stage and
                            hit the market in time.
                        </p>
                        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                            <a
                                rel="noreferrer"
                                href="https://twitter.com/saxenaaman800"
                                target="_blank"
                            >
                                <AiFillTwitterCircle
                                    color="#1DA1F2"
                                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                                />
                            </a>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.linkedin.com/in/aman-saxena-06ab79170/"
                            >
                                <AiFillLinkedin
                                    color="#0A66C2"
                                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                                />
                            </a>
                            {/* <AiFillYoutube color="#FF0000"  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"/> */}
                        </div>
                        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                            <Image src={deved} layout="fill" objectFit="cover" />
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Since the beginning of my journey as a freelance designer and developer,
                            I've done remote work for
                            <span className="text-teal-500"> agencies </span>
                            consulted for <span className="text-teal-500">startups </span>
                            and collaborated with talanted people to create digital products for
                            both business and consumer use.
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            I offer from a wide range of services, including brand design,
                            programming and teaching.
                        </p>
                    </div>
                    <div className="lg:flex gap-10">
                        <div
                            data-aos="fade-right"
                            className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1"
                        >
                            <Image src={design} width={100} height={100} />
                            <h3 className="text-xl font-medium pt-8 pb-2  ">Beautiful Designs</h3>
                            <p className="py-2">
                                Creating elegant designs suited for your needs following core design
                                theory.
                            </p>
                            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                            <p className="text-gray-800 py-1">Photoshop</p>
                            <p className="text-gray-800 py-1">Illustrator</p>
                            <p className="text-gray-800 py-1">Figma</p>
                            <p className="text-gray-800 py-1">Indesign</p>
                        </div>
                        <div
                            data-aos="fade-down"
                            className="text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1"
                        >
                            <Image src={code} width={100} height={100} />
                            <h3 className="text-xl font-medium pt-8 pb-2 ">
                                Code your dream project
                            </h3>
                            <p className="py-2">
                                Do you have an idea for your next great website? Let's make it a
                                reality.
                            </p>
                            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                            <p className="text-gray-800 py-1">React.js</p>
                            <p className="text-gray-800 py-1">Next.js</p>
                            <p className="text-gray-800 py-1">React Native</p>
                            <p className="text-gray-800 py-1">Typescript</p>
                            <p className="text-gray-800 py-1">Tailwind/Material-UI/Antd</p>
                        </div>
                        <div
                            data-aos="fade-left"
                            className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1320/1320452.png"
                                width={100}
                                height={100}
                                className="object-contain m-auto"
                            />
                            <h3 className="text-xl font-medium pt-8 pb-2 ">Bugfixes</h3>
                            <p className="py-2">
                                Get your P0, P1 Bugfixes & Hotfixes resolved under minutes.
                            </p>
                            <h4 className="py-4 text-teal-600">Debugging</h4>
                            <p className="text-gray-800 py-1">Common Sense</p>
                        </div>
                    </div>
                </section>
                <section className="py-10">
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Since the beginning of my journey as a freelance designer and developer,
                            I've done remote work for
                            <span className="text-teal-500"> agencies </span>
                            consulted for <span className="text-teal-500">startups </span>
                            and collaborated with talanted people to create digital products for
                            both business and consumer use.
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            I offer from a wide range of services, including brand design,
                            programming and teaching.
                        </p>
                    </div>
                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1 ">
                            <Image
                                className="rounded-lg object-cover"
                                width={'100%'}
                                height={'100%'}
                                layout="responsive"
                                src={web1}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={'100%'}
                                height={'100%'}
                                layout="responsive"
                                src={web2}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={'100%'}
                                height={'100%'}
                                layout="responsive"
                                src={web3}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={'100%'}
                                height={'100%'}
                                layout="responsive"
                                src={web4}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={'100%'}
                                height={'100%'}
                                layout="responsive"
                                src={web5}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={'100%'}
                                height={'100%'}
                                layout="responsive"
                                src={web6}
                            />
                        </div>
                    </div>
                    <footer class="text-center bg-white rounded-lg shadow m-4 dark:bg-gray-800 align-center m-auto w-[20%]">
                        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                            <span class="m-auto text-sm text-gray-500 sm:text-center dark:text-gray-400">
                                © 2023{' '}
                                <a
                                    href="https://www.linkedin.com/in/aman-saxena-06ab79170/"
                                    class="hover:underline"
                                >
                                    Aman . All Rights Reserved.
                                </a>
                            </span>
                            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"></ul>
                        </div>
                    </footer>
                </section>
            </main>
        </div>
    );
}
