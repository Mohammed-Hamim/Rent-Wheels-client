import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
 

export default function HeroType({title}) {
    const [text] = useTypewriter({
        words: [title],
        loop: false, // play once per slide
        typeSpeed: 50,
        deleteSpeed: 0,
        delaySpeed: 500,
    });

    return (
        <h1 className="text-3xl text-teal-500 font-bold">
            <span>{text}</span>
            <Cursor cursorStyle="|" />
        </h1>
    )
}
