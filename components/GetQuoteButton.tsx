import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import React from "react"

interface Props {
  variant?: "outline" | "default" | "link"
  buttonText?: string
  className?: string
}

export default function GetQuoteButton({ variant, buttonText, className }: Props) {
  return (
    <Link href="/quote" className="flex items-center space-x-2">
      <Button variant={variant ?? "default"} className={`rounded-[50px] text-white ${className} p-3 px-5`}>
        Reach out to us
        <ArrowUpRight className="ml-2" />
      </Button>
    </Link>
  )
}
