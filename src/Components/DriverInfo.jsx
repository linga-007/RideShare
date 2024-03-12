import React, { useState } from 'react'

import { Rating } from 'react-simple-star-rating'

import CarDetails from './CarDetails'
import Transport from './Transport'
import Map from './Map'
import GooglemapApi from './GooglemapApi'
export const DriverInfo = () => {


  return (
        <div className='h-[767px] w-100%  border rounded-lg flex justify-between m-3 p-3 gap-3 shadow-[0px_0px_10px_rgba(8,_112,_184,_0.7)]  shadow-[#5E81AC] '>
            <div className='w-[522px] h-100% flex flex-col gap-3'>
                <CarDetails/>
                <Transport/>
            </div>
            {/* <Map/> */}
            <GooglemapApi/>
            
            

        </div>
  

  
  )
  }