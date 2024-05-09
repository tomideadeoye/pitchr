"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ContactUsRequest } from "app/api/contact-us/route"
import { companyData } from "app/page"
import ImageUploadComponent from "components/ImageUploadComponent"
import { ImageType } from "react-images-uploading"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function GetQTFQuote() {
  const [files, setFiles] = useState<ImageType[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      company: "",
    },
  })

  const onSubmit = async (data: ContactUsRequest) => {
    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const responseData = await response.json()
        console.log(responseData)
        toast.success("Thank you for your message! We'll get back to you shortly.")
        reset()
      } else {
        console.error("API request failed:", response.status, response.statusText)
        toast.error("An error occurred while processing your request. Please try again later.")
      }
    } catch (error) {
      console.error("Error processing API request:", error)
      toast.error("An error occurred while processing your request. Please try again later.")
    }
  }

  const phone = false

  return (
    <div className="mx-auto mb-[80px] mt-[80px] flex max-w-[800px] items-center gap-14 overflow-hidden bg-white p-10 dark:bg-gray-900">
      <div className="flex w-full flex-col gap-8">
        <h2 className="text-center">Let's get to know your startup</h2>
        <p>
          You can reach us anytime via{" "}
          <a href={"mailto:" + companyData.contact.emails[0]} className="font-bold text-primary">
            {companyData.companyName}
          </a>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-3">
          <div className="flex w-full flex-col gap-3 md:flex-row">
            <div className="flex w-full flex-col gap-1">
              <label>First name</label>
              <Input
                className="p-2"
                {...register("firstName", { required: true })}
                type="text"
                placeholder="Enter your first name"
              />
              {errors.firstName && <span>First name is required</span>}
            </div>
            <div className="flex w-full flex-col gap-1">
              <label>Last name</label>
              <Input
                className="p-2"
                {...register("lastName", { required: true })}
                type="text"
                placeholder="Enter your last name"
              />
              {errors.lastName && <span>Invalid last name</span>}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <Input
              className="p-2"
              {...register("email", { required: true })}
              type="text"
              placeholder="you@company.com"
            />
            {errors.email && <span>Invalid email</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label>Phone number</label>
            <Input
              className="p-2"
              {...register("phone", { required: true })}
              type="text"
              placeholder="Enter your phone number"
            />
            {errors.phone && <span>Invalid phone</span>}
          </div>

          <div className="flex w-full flex-col gap-1">
            <label>Company name</label>
            <Input
              className="p-2"
              {...register("lastName", { required: true })}
              type="text"
              placeholder="Your company name"
            />
            {errors.company && <span>Required</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label>Message or company description</label>
            <Textarea
              {...register("message", { required: true })}
              placeholder="Leave us a message..."
              rows={6}
              className="w-full p-2"
            />
            {errors.message && <span>Message is required</span>}
          </div>
          <p>You can add relevant files like your pitch deck</p>
          <ImageUploadComponent setImages={setFiles} images={files} />

          <Button type="submit" className="w-full rounded-xl text-white">
            Send
          </Button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}
