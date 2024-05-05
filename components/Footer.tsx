import { companyData } from "app/page"
import { Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const services = [
    {
      name: "Solar Farms",
      href: "#",
    },
    {
      name: "Organisations",
      href: "#",
    },
    {
      name: "Apartments",
      href: "#",
    },
  ]

  const footerItems = [
    {
      title: companyData.companyName,
      items: [
        {
          name: "About Us",
          href: "/about",
        },
        {
          name: "Careers",
          href: "#",
        },
      ],
    },
    {
      title: "Resources",
      items: [
        {
          name: "Blog",
          href: "#",
        },
        {
          name: "Support",
          href: "#",
        },
        {
          name: "FAQ",
          href: "#",
        },
      ],
    },
  ]

  return (
    <footer className="bg-white p-4 dark:bg-gray-900">
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
              <a href={companyData.contact.emails[0]} target="_blank" rel="noopener noreferrer" className="mb-4">
                {companyData.contact.emails[0]}
              </a>
              <li className="flex gap-3">
                <Link href="/">
                  <Instagram className="w-5 text-primary" />
                </Link>
                <Link href="/">
                  <Twitter className="w-5 text-primary" />
                </Link>
                <Link href="/">
                  <Linkedin className="w-5 text-primary" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-4 py-6 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-300">
          <p>
            The content on this website does not constitute a complete description of {companyData.companyName}’s
            advisory services. By using this website, you accept our{" "}
            <Link href="/terms" className="text-gray-500 dark:text-gray-300">
              Terms of Use{" "}
            </Link>
            and{" "}
            <Link href="/terms" className="text-gray-500 dark:text-gray-300">
              Privacy Policy
            </Link>
            .
          </p>

          <span>© {companyData.companyName}. All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}
