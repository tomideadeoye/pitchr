import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { companyData } from "app/page"

export const FAQAccordion = () => {
  const accordionData = [
    {
      value: "item-1",
      question: `What services does ${companyData.companyName} provide?`,
      answer: `${companyData.companyName} offers comprehensive solar services, including consultation, custom solar design, efficient installation, energy audits, grid-tied and off-grid solar systems, battery storage solutions, maintenance, monitoring, financing guidance, educational workshops, green certification support, community solar programs, and user-friendly solar system upgrades.`,
    },
    {
      value: `item-2`,
      question: `How can solar energy benefit my organization?`,
      answer: `We offer a range of solar solutions to meet your needs.`,
    },
    {
      value: `item-3`,
      question: `How does ${companyData.companyName} ensure the reliability of solar systems?`,
      answer: `${companyData.companyName} uses advanced technology to ensure the reliability of your solar system.`,
    },
    {
      value: `item-4`,
      question: `What makes ${companyData.companyName}'s solar solutions unique?`,
      answer: `${companyData.companyName}'s solar solutions are designed to meet the unique needs of your organization.`,
    },
    {
      value: `item-5`,
      question: `Can ${companyData.companyName} work with apartment complexes?`,
      answer: `Yes, ${companyData.companyName} can work with apartment complexes.`,
    },
    {
      value: `item-6`,
      question: `Can ${companyData.companyName} work with apartment complexes?`,
      answer: `Yes, ${companyData.companyName} can work with apartment complexes.`,
    },
    {
      value: `item-7`,
      question: `Are there financing options available for solar installation?`,
      answer: `Yes, ${companyData.companyName} offers financing options for solar installation.`,
    },
  ]
  return (
    <div className="flex w-full flex-col gap-4 md:flex-row">
      <Accordion type="single" collapsible className="flex w-full flex-col gap-5">
        {accordionData.slice(0, 4).map(({ value, question, answer }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent className="my-5">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Accordion type="single" collapsible className="flex w-full flex-col gap-5">
        {accordionData.slice(4, 9).map(({ value, question, answer }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent className="mt-5">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
