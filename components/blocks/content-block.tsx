import React from 'react'

interface ContentBlockProps {
    title: string
    children?: React.ReactNode
    element?: React.ElementType
    className?: string
    id?: string
}

export default function ContentBlock({ children, element: Heading = 'h2', title, id }: ContentBlockProps) {
    return (
        <section id={id} className="bg-lime-400 flex flex-col items-center justify-between gap-4 py-6 px-10 rounded-md">
            <Heading className="font-extrabold font-caacupe text-gray-800 text-[clamp(2.5rem,5vw,3.5rem)]">
                {title}
            </Heading>
            {children}
        </section>
    )
}
