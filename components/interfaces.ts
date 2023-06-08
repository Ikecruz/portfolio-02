import { ReactNode } from "react"

export interface IconProps {
    size?: number,
    color?: string
}

export interface MyCursorProps {
    children?: ReactNode
}

export interface MobileNavbarProps {
    opened: boolean
    onClose(): void 
}

export interface AnimatedTextProps {
    text: string,
    className?: string
}