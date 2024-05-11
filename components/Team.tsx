"use client"
import { Linkedin, TwitterIcon } from "lucide-react"
import { companyData } from "../app/Home"

export function Team() {
  return (
    <section
      className="duration-900 mx-auto flex flex-col gap-14 text-center grayscale-[60%] transition ease-in-out hover:grayscale-0 dark:bg-gray-900"
      id="team"
    >
      <h1 className="text-3xl">Team</h1>
      <div className="flex flex-col items-center md:flex-row ">
        {companyData.team.map((person) => {
          return (
            <div className="shadow-lg">
              <img
                src={`/team/${person.name}.jpeg`}
                className="w-full border-[1px] border-solid border-primary object-cover "
              />
              <div className="flex items-center justify-between rounded-lg bg-white p-4 text-primary shadow ">
                <p className="md:text-md text-xs">{person.name}</p>
                <div className="flex cursor-pointer gap-4 ">
                  <a href={person.twitter} className="">
                    <TwitterIcon href={person.twitter} className="h-3 w-3 md:h-6 md:w-6" />
                  </a>
                  <a href={person.linkedin}>
                    <Linkedin href={person.twitter} className="h-3 w-3 md:h-6 md:w-6" />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
