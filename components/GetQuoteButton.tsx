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
    <Link href="/quote" className="w-fit">
      <Button
        variant={variant ?? "default"}
        className={`rounded-[50px] text-white ${className} flex w-fit gap-2 px-5 text-xs`}
      >
        {buttonText ?? "Reach out to us"}
        <ArrowUpRight />
      </Button>
    </Link>
  )
}
