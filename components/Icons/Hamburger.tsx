import { IconProps } from "../interfaces"

export const Hamburger = ({
    size = 18,
    color = "white"
}: IconProps) => {
    return <>
        <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33325 14.5833H14.5833M41.6666 14.5833H22.9166M41.6666 35.4167H35.4166M8.33325 35.4167H27.0833M8.33325 25H41.6666" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    </>
}