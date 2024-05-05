"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import GetQuoteButton from "./GetQuoteButton"
import { companyData } from "app/page"

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleOutSideClick = (event: { target: any }) => {
      // @ts-ignore
      if (!ref.current?.contains(event.target)) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("mousedown", handleOutSideClick)

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick)
    }
  }, [ref])

  return (
    <>
      <div>
        <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
          <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/logo.png" className="h-8" alt={companyData.companyName + " logo"} />
            </Link>
            <div className="flex space-x-3 rtl:space-x-reverse md:order-2 md:space-x-0">
              <div className="hidden sm:block">
                <GetQuoteButton />
              </div>
              <button
                data-drawer-target="logo-sidebar"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
              <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                {navLinks.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className={`block rounded px-3 py-2 text-gray-900 hover:bg-gray-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {mobileMenuOpen && (
        <aside id="logo-sidebar" className="fixed left-0 top-0 z-40 h-screen w-64" aria-label="Sidebar" ref={ref}>
          <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
            <Link href="/" className="mb-5 flex items-center space-x-3 ps-2.5 rtl:space-x-reverse">
              <img src="/logo.svg" className="me-3 h-8 sm:h-7" alt="{companyData.companyName} Logo" />
            </Link>
            <ul className="flex-col justify-between space-y-2 font-medium">
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    {label}
                  </Link>
                </li>
              ))}

              <li onClick={() => setMobileMenuOpen(false)}>
                <GetQuoteButton />
              </li>
            </ul>
          </div>
        </aside>
      )}
    </>
  )
}
