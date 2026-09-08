import React from 'react'

interface ContentBlockProps {
    children: React.ReactNode
    element?: React.ElementType
    className?: string
    title: string
}

export default function ContentBlock({ children, element: Heading = 'h2', title }: ContentBlockProps) {
    return (
        <section className="bg-lime-400 flex flex-col items-center justify-between gap-4 py-6 px-10 rounded-md">
            <Heading className="font-extrabold font-caacupe text-[clamp(2.5rem,5vw,3.5rem)]">
                {title}
            </Heading>
            {children}
        </section>
    )
}
