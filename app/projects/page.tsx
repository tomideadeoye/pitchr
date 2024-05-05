import { Metadata } from "next"
import { JoinUsBanner } from "components/JoinUsBanner"
import { projectsGallery, ProjectGalleryProps } from "./projectsData"

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
  return (
    <section className="mx-auto flex max-w-screen-xl flex-col items-center gap-14  bg-white p-16 dark:bg-gray-900">
      <h1 className="mb-4 w-full max-w-4xl self-start">Explore some of our solar projects</h1>
      <img src="/icons/adoredarrow.svg" className="mt-[-40px] h-14 w-14" />
      {
        <div className="flex flex-col gap-8">
          {projectsGallery.map((item, index) => (
            <ProjectCard key={index} {...item} />
          ))}
        </div>
      }
      <JoinUsBanner />
    </section>
  )
}

const ProjectCard = (item: ProjectGalleryProps) => {
  return (
    <div className="flex flex-col gap-5">
      <img src={`${item.images[0]}`} className="w-full" />
      <h2 className="mb-2">{item.title}</h2>

      <div className="flex flex-col gap-3 ">
        <p className="text-sm text-gray-700">
          Duration: <b>{item.duration}</b>
        </p>
        <p className="text-sm text-gray-700">
          Location: <b>{item.client}</b>
        </p>
        <p className="text-sm text-gray-700">
          Client: <b>{item.client}</b>
        </p>
        <p className="text-sm text-gray-700">{item.description}</p>
      </div>
    </div>
  )
}
