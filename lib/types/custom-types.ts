export type MotionElements = 'div' | 'section' | 'ul' | 'ol' | 'li' | 'table' | 'header' | 'main'

export type HrefTarget = "_blank" | "_self" | "_parent" | "_top";

export interface NavigationProps {
    data: {
        title: string
        href: string
    }[]
}