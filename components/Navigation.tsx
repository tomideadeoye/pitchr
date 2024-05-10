"use client"
import Link from "next/link"
import GetQuoteButton from "./GetQuoteButton"
import { Instagram, Linkedin, Twitter } from "lucide-react"
import { companyData } from "app/Home"

const navRoutes: {
  name: string
  href: string
}[] = [
  {
    name: "Process",
    href: "/?#process",
  },
  {
    name: "Team",
    href: "/?#team",
  },
]

export default function Navbar() {
  return (
    <div className="sticky  top-0 z-10 mx-auto flex w-full items-center justify-center bg-primary p-4 text-white dark:bg-gray-900">
      <div className="flex w-full max-w-screen-xl  items-center justify-between self-center">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="h-8" alt={`${companyData.companyName} logo`} />
        </Link>

        <div className="flex-end flex  items-center gap-8 self-end">
          {navRoutes.map((item) => (
            <Link href={item.href} legacyBehavior passHref>
              {item.name}
            </Link>
          ))}{" "}
          <GetQuoteButton buttonText="Suggest a Startup" className="bg-white text-primary" />
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  const footerItems = [
    {
      title: companyData.companyName,
      items: navRoutes,
    },
  ]

  return (
    <footer className="border-t-primary-foreground bg-primary py-20 text-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 md:grid-cols-4 lg:py-8">
          <div className="flex flex-col gap-4 px-4 dark:bg-gray-700">
            <img src="/logo.png" className="h-12 w-9" alt={companyData.companyName + " logo"} />
            <span className="text-sm">© {companyData.companyName}. All rights reserved</span>
          </div>
          {footerItems.map((footerItem) => (
            <div>
              <h3 className="text-md mb-6 font-semibold uppercase">{footerItem.title}</h3>
              <ul className="text-sm font-medium  ">
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
            <h3 className="text-md mb-6 font-semibold uppercase">Contact Us</h3>
            <ul className="font-medium">
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
          </div>{" "}
        </div>
      </div>
    </footer>
  )
}
