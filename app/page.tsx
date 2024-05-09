import { Metadata } from "next"

const metadata: Metadata = {
  title: "PitchR",
  twitter: {
    card: "summary_large_image",
  },

  openGraph: {
    url: "https://www.qtfenergy.com/",
    title: "PitchR",
    description: "Venture funding for your startup",
    siteName: "PitchR",

    images: [
      {
        width: 1200,
        height: 630,
        url: "https://github.com/QorePay-Technology-Solutions/qtf-energy-webapp/blob/main/public/logo.svg",
      },
    ],
  },
  other: {},
}
import { Home } from "./Home"

export const companyData = {
  companyName: "PitchR Africa",
  contact: {
    websites: ["www.pitchr.africa"],
    emails: ["info@pitchr.africa"],
    phones: ["+234 815 708 3837"],
    addresses: ["Co-Working Space X"],
    socialMedia: {
      twitter: null,
      linkedin: null,
      instagram: null,
    },
  },
  taglines: ["Fundraise with Ease", `Deliver your best Pitch to Investors with PitchR`],

  Stat: "Most founders get to close less than 5x of the investors they pitch to - we can help you 10x that outcome.",
  Description:
    "Our aim is to improve fundraising outcomes for founders and get you to give your best pitch to the next investors you engage with.",
  Mission: "to prepare and set up founders for a successful fundraiser.",
  Vision: [
    "To be the leading ecosystem where founders and startups can find the highest quality support materials, guidance, and resources for founders and their startups.",
    "To democratize access and knowledge to investor preparedness.",
    "To play a leading role and be the connecting point between founders and investors in Africa.",
  ],
  PortfolioStartups: [
    {
      name: "JuiceLife.io",
      logo: "https://pbs.twimg.com/profile_images/1709340903305818112/7Iu8BM1D_400x400.jpg",
      website: "www.juicelife.io",
      description: "JuiceLife makes exercise routines fun like playing video games and rewards you for playing.",
      twitter: "https://twitter.com/JuiceLife_io",
    },
    {
      name: "Barrel",
      logo: "https://www.usebarrel.io/assets/barrel-logo.svg",
      website: "https://www.usebarrel.io",
      description: "",
      socialMedia: [
        {
          name: "linkedin",
          url: "https://www.linkedin.com/company/usebarrel/",
        },
      ],
    },
  ],
  team: [
    {
      name: "Timileyin Idowu",
      linkedin: "https://www.linkedin.com/in/timileyin-idowu-507523146/",
      twitter: "",
    },
    {
      name: "Olumide Ashade",
      linkedin: "https://www.linkedin.com/in/olumide-ashade-7b4089162/",
      twitter: "https://twitter.com/OlumideAshade",
    },
    {
      name: "Carl Macaulay",
      linkedin: "https://www.linkedin.com/in/timileyin-idowu-507523146/",
      twitter: "",
    },
  ],
  advisors: [],
  OurProcess: [
    "Sign up by filling out our form.",
    "Intro call to learn more about what you’re building and the specific support you need.",
    "A second call to further understand your needs and develop a tailor-made solution/plan",
    "Bi-Weekly calls to keep updated and provide continued support.",
  ],
  Metrics: {
    VCExperienceYears: 5,
    VCInvestorsNetwork: 30,
  },
  ValueAdd: [
    "Review and get Feedback on your startup Pitch to investors",
    "6-Months fundraising support",
    "VC ecosystem support",
    "Fundraising database management",
    "Extensive Investment network",
  ],
  TargetStartups: {
    Criteria: [
      "Founders with a proven track record of building something helpful.",
      "Already begun fundraising journey/progress",
      "Raising $300k+ for Pre-Seed round, $1m+ for Seed Round, $3m+ Series A.",
    ],

    Cost: {
      Commitment: "Commitment to the process",
      Donation: "1% of successful fundraise donated to a program/initiative/NGO of choice",
      Agreement: "To be agreed upon by the end of the first call.",
    },
  },
}

export default function Web() {
  return <Home />
}
