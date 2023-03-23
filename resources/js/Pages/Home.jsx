import React from "react";
import {Head} from "@inertiajs/react";

export default function Home() {

    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/logo.png" />
                <meta name="description" content="WPDev Dormitory is the accommodation facilities for employee of WPDeveloper. The dormitory has a total of three floors, each with an area of 2500 square feet. The dormitory provides comfortable living spaces, dining areas, and recreational facilities. It also equipped with all the necessary amenities to ensure a comfortable stay for its residents, such as high-speed internet, internal chef, food, and 24-hour security."/>
                <meta name="og:title" content="WPDev Dormitory" />
                <meta property="og:image" content="/ogimage.png" />
                <meta name="og:description" content="WPDev Dormitory is the accommodation facilities for employee of WPDeveloper. The dormitory has a total of three floors, each with an area of 2500 square feet. The dormitory provides comfortable living spaces, dining areas, and recreational facilities. It also equipped with all the necessary amenities to ensure a comfortable stay for its residents, such as high-speed internet, internal chef, food, and 24-hour security." />
            </Head>
            <div className="bg-white dark:bg-black">
                <div className="2xl:max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                        <aside className="w-full">
                            <div className="w-full lg:px-10 lg:py-12 px-8 py-8 rounded-xl sm:px-16 sticky top-0">
                                <div><a className="dark:text-white text-black" href="/">
                                    <img src='/logo.png' alt="logo"/>
                                </a></div>
                                <h1 className="dark:text-white text-black 2xl:text-6xl font-bold text-3xl tracking-tighter mt-3">WPDev Dormitory</h1>
                                <div className="lg:mt-8 max-w-xl"><p className="dark:text-zinc-400 text-zinc-500 text-base">
                                    WPDev Dormitory is the accommodation facilities for employee of WPDeveloper. The dormitory has a total of three floors, each with an area of 2500 square feet. The dormitory provides comfortable living spaces, dining areas, and recreational facilities. It also equipped with all the necessary amenities to ensure a comfortable stay for its residents, such as high-speed internet, internal chef, food, and 24-hour security.
                                </p></div>
                                <div className="border-t border-zinc-800 mt-4 pt-6">
                                    <ul className="inline-flex items-center gap-3" role="list">
                                        <li className="flex"><a
                                            className="dark:text-zinc-400 text-zinc-500 dark:hover:text-white hover:text-black flex font-medium group text-sm transition"
                                            href="#">
                                            <svg aria-hidden="true" viewBox="0 0 24 24"
                                                 className="fill-zinc-500 flex-none group-hover:fill-zinc-400 h-6 transition w-6">
                                                <path
                                                    d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
                                            </svg>
                                        </a></li>
                                        <li className="flex"><a
                                            className="dark:text-zinc-400 text-zinc-500 dark:hover:text-white hover:text-black flex font-medium group text-sm transition"
                                            href="#">
                                            <svg aria-hidden="true" viewBox="0 0 24 24"
                                                 className="fill-zinc-500 flex-none group-hover:fill-zinc-400 h-6 transition w-6">
                                                <path
                                                    d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                                                    fillRule="evenodd" clipRule="evenodd"></path>
                                            </svg>
                                        </a></li>
                                        <li className="flex"><a
                                            className="dark:text-zinc-400 text-zinc-500 dark:hover:text-white hover:text-black flex font-medium group text-sm transition"
                                            href="mailto:spencer@planetaria.tech">
                                            <svg aria-hidden="true" viewBox="0 0 24 24"
                                                 className="fill-zinc-500 flex-none group-hover:fill-zinc-400 h-6 transition w-6">
                                                <path
                                                    d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                                                    fillRule="evenodd"></path>
                                            </svg>
                                        </a></li>
                                    </ul>
                                    <nav>
                                        <ul className="inline-flex items-center lg:mt-12 lg:space-y-3 list-none mt-6 no-underline sm:flex sm:flex-col sm:items-start sm:space-x-0 space-x-3"
                                            role="list">
                                            <li><a
                                                className="dark:text-zinc-400 text-zinc-500 dark:hover:text-white hover:text-black inline-flex items-center"
                                                href="https://wpdeveloper.com/about"><span>About</span></a></li>
                                            <li><a
                                                className="dark:text-zinc-400 text-zinc-500 dark:hover:text-white hover:text-black inline-flex items-center"
                                                href="/login"><span>Login</span></a></li>
                                            <li><a
                                                className="dark:text-zinc-400 text-zinc-500 dark:hover:text-white hover:text-black inline-flex items-center"
                                                href="/register"><span>Projects</span></a></li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </aside>
                        <main className="w-full lg:col-span-3" role="main">
                            <section>
                                <div className="gap-3 grid grid-cols-1 p-4">
                                    <div className="rounded-xl aspect-[280/300] bg-zinc-100 filter  overflow-hidden">
                                        <img
                                            alt="#" className="h-full object-cover" decoding="async" height="4209"
                                            loading="lazy"
                                            src="/wpdev-banner.png"
                                            width="3368"/></div>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
