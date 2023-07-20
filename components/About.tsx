"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
type Props = {}

export default function About({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}

      className='space-y-10 flex flex-col relative  h-screen text-center md:text-left 
      md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Sobre Nosotros
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        // viewport={{ once: true }}
        className='mt-40'
      >
        <Image
          // md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
          // className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
          className='space-y-10 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
          md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
          src="/pucp2.jpeg"
          width={300}
          height={300}
          alt="gerardo-aws"
        />
      </motion.div>

      <div className=' flex flex-col space-y-10 px-0 md:px-10 text-center mg 
        xl:w-96 '>
        <h4 className='text-4xl font-semibold'>
          Hola 👋🏻 somos <span className='underline decoration-[#F7AB0A]/50'> Pixel </span>
        </h4>
        <p className='text-sm  '>
          Grupo encargado de desarollo frontend en pixel. Formado en el ano 2023. Nuestro objetivo es 
          ganar experiencia en tecnologias web como html css javascript react next etc.
        </p>

      </div>

    </motion.div >
  )
}
