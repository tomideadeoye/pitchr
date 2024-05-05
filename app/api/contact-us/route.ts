import { NextRequest, NextResponse } from "next/server"
import { ApiKeySession, EventsApi } from "klaviyo-api"

export interface ContactUsRequest {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const session = new ApiKeySession(process.env.KLAVIYO_API_KEY ?? "")

    console.log(process.env.KLAVIYO_API_KEY)
    const eventsApi = new EventsApi(session)

    const body = await request.json()

    const { email, firstName, lastName, phone, message } = body as ContactUsRequest

    const klaviyoResponse = await eventsApi.createEvent({
      data: {
        type: "event",
        attributes: {
          properties: {
            email: email || "",
            firstName: firstName || "",
            lastName: lastName || "",
            phone: phone || "",
            message: message || "",
          },
          metric: {
            data: {
              type: "metric",
              attributes: { name: "contact-us-qtf" },
            },
          },
          profile: {
            data: {
              type: "profile",
              attributes: {
                email: email || "",
                firstName: firstName,
                lastName: lastName,
              },
            },
          },
        },
      },
    })

    return NextResponse.json({
      data: "success",
    })
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error: "Error submitting contact form" }, { status: 500 })
  }
}
