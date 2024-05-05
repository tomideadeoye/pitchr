import { Metadata } from "next"
import { GridItemsDisplay } from "components/GridItemsDisplay"
import GetQuoteButton from "components/GetQuoteButton"
import { JoinUsBanner } from "components/JoinUsBanner"
import { companyData } from "app/page"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "About Us",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  const whyQTF: { icon: string; title: string; description: string }[] = [
    {
      icon: "stars.svg",
      title: "Expertise in Large-Scale Solar Solutions",
      description: `With years of experience in the solar energy sector, {companyData.companyName} is at the forefront of delivering tailored large-scale solar services.`,
    },
    {
      icon: "environment.svg",
      title: "Environmental Stewardship",
      description: `By choosing our services, you are not only investing in clean energy but actively participating in the global movement towards a greener and more sustainable future.`,
    },
    {
      icon: "industry.svg",
      title: "Customized Solutions for Organizations",
      description: `{companyData.companyName} takes a consultative approach, working closely with clients to design and implement solar solutions that align with their specific goals, energy consumption patterns, and budget considerations. `,
    },
    {
      icon: "apartment.svg",
      title: "Efficient Apartment Solar Solutions",
      description: `{companyData.companyName} provides comprehensive solar solutions tailored for apartment communities, enhancing energy efficiency, reducing costs, and creating a positive environmental impact.`,
    },
  ]
  return (
    <section className="mx-auto mb-10 flex max-w-screen-xl flex-col gap-14 bg-white p-10  dark:bg-gray-900">
      <div className="p-4">
        <p className="text-center text-3xl font-bold text-gray-800"> Team</p>
        <p className="mb-32 text-center text-xl font-normal text-gray-500">Meat the best team in wolrd</p>
        <div className="justify evenly flex flex-col items-center space-y-24 md:flex-row md:space-y-0">
          {companyData.team.map((person) => {
            return (
              <div className="relative p-4">
                <div className="absolute -top-16 right-1/2 mb-4 translate-x-1/2 transform text-center">
                  <a href="#" className="relative block">
                    <Avatar>
                      <AvatarImage src={`/team/${person.name}.jpeg`} alt={`${person.name} profile`} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </a>
                </div>
                <div className="rounded-lg bg-white px-8 py-4 pt-24 shadow dark:bg-gray-800">
                  <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">{person.name}</p>
                    <p className="text-xl font-light text-gray-500 dark:text-gray-200">Lead dev</p>
                    <p className="text-md mx-auto w-60 py-4 font-light text-gray-500 dark:text-gray-400">
                      {person.Bio}
                    </p>
                  </div>
                  <div className="mx-auto flex w-40 items-center justify-between border-t border-gray-200 pt-8 text-gray-500">
                    <a href="#">
                      <svg
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                      >
                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                      </svg>
                    </a>

                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex max-w-screen-xl flex-col  items-start justify-start px-4 py-8  lg:py-16">
        <h1 className="mb-4 max-w-2xl">Infinite Energy, Infinite Possibilities.</h1>
        <div className="flex flex-col self-end">
          <p className="mb-6 max-w-2xl text-sm font-light dark:text-gray-400 md:max-w-md">
            As a premier provider of large-scale solar services, we are committed to powering a brighter, cleaner future
            for organizations and apartments alike.
          </p>
          <GetQuoteButton variant="outline" className="border-black text-black" />
        </div>
      </div>
      <img src="/images/panelTower.png" alt="Solar Panels" className="hidden object-contain p-5 md:block " />
      <div className="flex items-center">
        <div className="flex max-w-screen-xl flex-col items-start justify-start px-4 py-8 lg:py-16">
          <p className="mb-6 max-w-2xl font-bold dark:text-gray-400">It’s all Solar!</p>
          <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight dark:text-white">
            Our Mission
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400">
            At the core of {companyData.companyName}'s mission is a dedication to revolutionizing energy consumption. We
            aim to empower organizations and apartment complexes with scalable, efficient, and sustainable solar
            solutions that not only reduce environmental impact but also contribute to substantial cost savings.
          </p>
        </div>

        <img src="/images/mission.png" alt="mission" className={`hidden max-w-[50%] object-contain p-5 md:block`} />
      </div>
      <div className="flex w-full">
        <h1 className="mb-4 w-fit max-w-[600px] text-3xl">Our Commitment to Innovation</h1>
        <img src="/icons/adoredarrow.svg" className="mt-[10px] h-14 w-14 self-center" />
      </div>
      <div className="max-w-2xl self-center rounded-3xl bg-accent p-10 px-10 text-center text-white">
        <p className="font-bold">
          {companyData.companyName} is not just a solar service provider; we are innovators in the renewable energy
          landscape. By staying ahead of industry advancements, we continually integrate the latest technologies into
          our solutions, ensuring our clients benefit from state-of-the-art, future-proof solar systems.
        </p>
      </div>
    </section>
  )
}
