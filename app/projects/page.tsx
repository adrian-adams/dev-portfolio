import React from 'react'
import ProjectCard from '@/components/blocks/project-card';
import { PROJECT_CARDS } from '@/lib/content/project-cards';
import { MotionBlock, MotionContainer } from '@/components/blocks/motion-blocks';
import Heading from '@/components/blocks/heading';
import ContentBlock from '@/components/blocks/content-block';

export default function Projects() {
    return (
        <MotionContainer>
            <ContentBlock title="Projects" />
            <MotionBlock as="section" className="utility-project-grid">
                {PROJECT_CARDS.filter(t => t.tag.includes("Projects")).map((card) => (
                    <ProjectCard
                        key={card.title}
                        background={card.background}
                        thumbnail={card.thumbnail}
                        title={card.title}
                        devType={card.devType}
                        desc={card.desc}
                        images={card.images}
                        cta
                    />
                ))}
            </MotionBlock>
        </MotionContainer>
    )
}
