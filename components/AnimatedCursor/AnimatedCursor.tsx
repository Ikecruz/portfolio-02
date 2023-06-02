'use client';

import { MyCursorProps } from "../interfaces";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() =>  import('react-animated-cursor'), {
    ssr: false
});

export const MyCursor = ({ children }: MyCursorProps) => {

    return <div>
        <AnimatedCursor
            color="255,255,255"
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={1.7}
            // outerAlpha={0}
            outerStyle={{
              mixBlendMode: 'exclusion'
            }}
        />
        {children}
    </div>

}