"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Integrante1 from './Integrante1'
type Props = {}

export default function Integrantes({}: Props) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration: 1.5}}

      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 
      min-h-screen justify-center xl:space-y-0  mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
      Integrantes
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'
      >Los integrantes de nuestro grupo</h3>
      <div className='grid grid-cols-4 gap-5 pt-40'> 
        <Integrante1/>
        <Integrante1/>
        <Integrante1/>
        <Integrante1/>
        <Integrante1/>
        <Integrante1/>
        <Integrante1/>
        <Integrante1/>
        <Integrante1/>
        <Integrante1/>
        <Integrante1/>
        <Integrante1/>
        <Integrante1/>
        <Integrante1/>
        <Integrante1/>
        <Integrante1/>
      </div>
    </motion.div>
  )
}
