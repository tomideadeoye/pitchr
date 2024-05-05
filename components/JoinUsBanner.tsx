"use client"

import { companyData } from "app/page"
import GetQuoteButton from "./GetQuoteButton"
import { Button } from "@/components/ui/button"

export const JoinUsBanner = () => {
  const handleSubscribe = () => {}

  return (
    <div className="flex w-fit flex-col items-center justify-between self-center rounded-3xl bg-primary px-10 py-[80px] text-center text-white">
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-y-10 lg:gap-x-5">
        {/* :TITLE CONTAINER */}
        <div className="col-span-full space-y-3 text-center lg:col-span-1 lg:text-left">
          {/* ::Title */}
          <h2 className="text-2xl font-bold sm:text-3xl">Sign up and join thousands of others</h2>
          {/* ::Text */}
          <p className="text-sm font-bold sm:text-base">Freebies. Giveaways. Updates.</p>
        </div>

        {/* :MAIN CONTAINER */}
        <div className="col-span-full mx-auto flex max-w-md flex-col justify-center md:max-w-2xl lg:col-span-2">
          {/* ::Subscription Newsletter Form */}
          <form
            action=""
            className="flex flex-col space-y-3 md:flex-row md:space-x-5 md:space-y-0"
            onSubmit={handleSubscribe}
          >
            {/* :::inputs */}
            <div className="flex flex-col sm:flex-row">
              {/* input name */}
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="form-input mb-2 w-full max-w-xs rounded border border-gray-300 focus:border-gray-200 focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 focus:ring-offset-white sm:mb-0 sm:mr-5"
              />
              {/* input email */}
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="form-input w-full max-w-xs rounded border border-gray-300 focus:border-gray-200 focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 focus:ring-offset-white"
              />
            </div>

            <span className="w-full flex-shrink-0 md:w-auto">
              <Button>Sign Up</Button>
            </span>
          </form>

          {/* ::Privacy Information */}
          <p className="mt-5 text-center text-xs font-semibold text-gray-500 md:text-right">
            You may unsubscribe at any time. We won't spam you.
          </p>
        </div>
      </div>
    </div>
  )
}
