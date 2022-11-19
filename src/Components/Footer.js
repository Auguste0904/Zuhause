import React from "react"

function Footer()
{
    return (
        <footer className="p-4 bg-primary shadow md:px-6 md:py-8 dark:bg-gray-900 fader">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Zuhause</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
                    <li>
                        <a href="/" className="mr-4 hover:underline md:mr-6 ">Concept</a>
                    </li>
                    <li>
                        <a href="/Portfolio" className="mr-4 hover:underline md:mr-6">Portfolio</a>
                    </li>
                    <li>
                        <a href="/Devis" className="mr-4 hover:underline md:mr-6 ">Devis</a>
                    </li>
                    <li>
                        <a href="/Contact" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer