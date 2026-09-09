import React from 'react'
import ContentBlock from '@/components/blocks/content-block';
import { MotionContainer, MotionBlock } from '@/components/blocks/motion-blocks';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from '@/lib/routes/routes';
import { Route } from 'next';

export default function About() {
    return (
        <MotionContainer>
            <MotionBlock>
                <ContentBlock title="About" />
            </MotionBlock>
            <MotionBlock className="grid grid-cols-1 md:grid-cols-5 gap-4 utility-content-block">
                <div className="relative h-75 col-span-2">
                    <Image
                        src="/content/about-profile.webp"
                        alt="About Me"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                        loading='eager'
                    />
                </div>
                <div className="col-span-3 flex flex-col justify-between gap-4">
                    <p className="text-white/80">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Link href={routes.resume() as Route ?? routes.home()} download>
                        <Button>
                            Download Resume
                        </Button>
                    </Link>
                </div>
            </MotionBlock>
            <MotionBlock>
                <div></div>
            </MotionBlock>
        </MotionContainer>
    )
}
