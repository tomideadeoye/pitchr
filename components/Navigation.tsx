"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { useEffect, useRef, useState } from "react";
import Link from "next/link"
import GetQuoteButton from "./GetQuoteButton"
import { Instagram, Linkedin, Twitter } from "lucide-react"
import { companyData } from "app/Home"

const navLinks = [{ href: "/about", label: "About Us" }]

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
    <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white p-5 text-xs dark:border-gray-600 dark:bg-gray-900">
      <NavigationMenu className="flex justify-between">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/logo.png" className="h-8" alt={companyData.companyName + " logo"} />
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem className="hidden lg:block">
            <Link href="/?#process" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>PROCESS</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>ABOUT US</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <GetQuoteButton buttonText="Suggest a Startup" />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}

export function Footer() {
  const footerItems = [
    {
      title: companyData.companyName,
      items: [
        {
          name: "About Us",
          href: "/about",
        },
      ],
    },
  ]

  return (
    <footer className="bg-white p-4 dark:bg-gray-900">
      <hr className="my-12 border-gray-200 dark:border-gray-700" />
      <div className="mx-auto w-full max-w-screen-xl text-gray-500">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 md:grid-cols-4 lg:py-8">
          {footerItems.map((footerItem) => (
            <div>
              <h3 className="text-md mb-6 font-semibold uppercase dark:text-white">{footerItem.title}</h3>
              <ul className="text-sm font-medium  dark:text-gray-400">
                {footerItem.items.map((item) => (
                  <li className="mb-4" key={item.name}>
                    <a href={item.href} className="hover:underline">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-md mb-6 font-semibold uppercase dark:text-white">Contact Us</h3>
            <ul className="font-medium  dark:text-gray-400">
              <li className="flex flex-col gap-3">
                <a href={companyData.contact.emails[0]} target="_blank" rel="noopener noreferrer" className="mb-4">
                  {companyData.contact.emails[0]}
                </a>
              </li>

              <li className="flex gap-3">
                {companyData.contact.socialMedia?.instagram && (
                  <Link href={companyData.contact.socialMedia.instagram}>
                    <Instagram className="w-5 text-primary" />
                  </Link>
                )}
                {companyData.contact.socialMedia?.twitter && (
                  <Link href={companyData.contact.socialMedia.twitter}>
                    <Twitter className="w-5 text-primary" />
                  </Link>
                )}

                {companyData.contact.socialMedia?.linkedin && (
                  <Link href={companyData.contact.socialMedia.linkedin}>
                    <Linkedin className="w-5 text-primary" />
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-col gap-6 px-4 py-6 text-gray-500 dark:bg-gray-700 dark:text-gray-300">
          <img src="/logo.png" className="h-12" alt={companyData.companyName + " logo"} />
          <span className="text-sm">© {companyData.companyName}. All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}
