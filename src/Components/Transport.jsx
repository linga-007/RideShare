import React from 'react'
import { useState } from 'react'
import Analytics from './Analytics'
import TrackingComponent from './TrackingComponent'
import Details from './Details'

const Transport = () => {

    const [options, setOptions] = useState("tracking")
  return (
    <div className='w-[55vh] h-[54vh] p-5 border border-gray-950 rounded-lg '>
                    <div className='flex justify-start gap-16'>
                        <button className='font-semibold text-[#7b7e83] text-xl' onClick={()=>{setOptions("tracking")}}>Tracking</button>
                        <button className='font-semibold text-[#7b7e83] text-xl' onClick={()=>{setOptions("analytics")}}>Analytics</button>
                        <button className='font-semibold text-[#7b7e83] text-xl' onClick={()=>{setOptions("details")}}>Details</button>
                    </div>
                    <div className='flex h-full w-full '>
                        {
                            (options === "tracking")? <TrackingComponent/> : ""
                        }
                        {
                            (options === "analytics")? <Analytics/> : ""
                        }
                        {
                            (options === "details")? <Details/> : ""
                        }
                    </div>
                </div>
  )
}

export default Transport