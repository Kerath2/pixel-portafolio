"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import Link from 'next/link';

type Props = {}

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "<Grupo de desarollo front-end/>",
      "</en la PUCP/>",
      "<Acabando el portafolio de forma rapida/>"
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='flex-grow pt-9'>
      <div className='h-screen flex flex-col space-y-9 items-center justify-center
        text-center overflow-hidden mt-9' >
        <BackgroundCircles />
        <Image className='relative rounded-full h-64 w-64 mx-auto object-cover'
          src='/nextjs.png'
          width={500}
          height={500}
          alt="Imagen de pixel"
        />
        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500  pb-2 tracking-[15px]'> Grupo pixel</h2>
          <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10 '>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
          </h1>
          <div className='pt-5'>
            <Link href="#about">
              <button className='heroButton'>Sobre nosotros </button>
            </Link>
            <Link href="#experiencia">

              <button className='heroButton'>Experiencia</button>
            </Link>
            <Link href="#integrantes">
              <button className='heroButton'>Integrantes</button>
            </Link>
            <Link href="#contact">

              <button className='heroButton'>Contacto</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
