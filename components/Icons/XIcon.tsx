import { IconProps } from "../interfaces"

export const XIcon = ({
    size = 18,
    color = "white"
}: IconProps) => {

    return <>

        <svg width={size} height={size} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.12625 18.834L4.66667 15.8639M20.0085 2.99375L9.38722 11.9039M24.8737 8.99727L21.3333 11.9673M5.99153 24.8375L16.6128 15.9274M3.55889 21.8357L22.4411 5.99551M18.1888 24.6366L15.0174 21.2625M1.27456 6.64114L10.7888 16.7636M6.80182 1.26334L9.97324 4.63749M23.716 19.2588L14.2018 9.13635M20.9524 21.9477L4.03819 3.95224" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>

    </>

}