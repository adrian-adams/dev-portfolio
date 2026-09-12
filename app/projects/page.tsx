import React from 'react'
import ProjectCard from '@/components/blocks/project-card';
import { PROJECTS } from '@/lib/content/projects';
import { MotionBlock, MotionContainer } from '@/components/blocks/motion-blocks';
import ContentBlock from '@/components/blocks/content-block';

export default function Projects() {
    return (
        <MotionContainer>
            <ContentBlock title="Projects" element="h1" />
            <MotionBlock as="section" className="utility-project-grid">
                {PROJECTS.filter(t => t.tag.includes("Projects")).map((card) => (
                    <ProjectCard
                        key={card.title}
                        thumbnail={card.thumbnail}
                        title={card.title}
                        devType={card.devType}
                        desc={card.desc}
                        images={card.images}
                        cta
                        slug={card.slug}
                    />
                ))}
            </MotionBlock>
        </MotionContainer>
    )
}
