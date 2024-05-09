"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ContactUsRequest } from "app/api/contact-us/route"
import ImageUploadComponent from "components/ImageUploadComponent"
import { ImageType } from "react-images-uploading"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { companyData } from "app/Home"

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
        <iframe
          className="airtable-embed h-[90vh] rounded-lg border-[1px] border-primary"
          src="https://airtable.com/embed/appASVC81CTdJYpUo/pagC9Ni4rPgzwVbYB/form"
          style={{ background: "transparent" }}
        ></iframe>
      </div>
      <ToastContainer />
    </div>
  )
}
