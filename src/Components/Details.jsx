import React from 'react'
import route from "../images/route.png";
import percentage from "../images/percentage.png";
import satisfaction from "../images/satisfaction.png";
import cartravel from "../images/cartravel.png"

const Details = () => {
  return (
    <div className="pt-7 flex flex-col gap-10">
      <div className="flex flex-row items-center gap-8">
          <img src={cartravel} width={40} height={40}></img>   
        <div>
          <h2 className="text-xl font-semibold">Total Rides</h2>
          <h4 className="text-[#7b7e83] font-medium text-lg">16</h4>
        </div>
      </div>
      <div className="flex flex-row items-center gap-8">  
          <img src={satisfaction} width={40} height={40}></img>  
        <div>
        <h2 className="text-xl font-semibold">Id Proof</h2>
        <h4 className="text-[#7b7e83] font-medium text-lg">80%</h4>
        </div>
      </div>
      <div className="flex flex-row items-center gap-8">
          <img src={route} width={40} height={40}></img>
        <div>
        <h2 className="text-xl font-semibold">Most Travelled Route</h2>
        <h4 className="text-[#7b7e83] font-medium text-lg">Saidapet to Chennai Airport</h4>
        </div>
      </div>
      <div className="flex flex-row items-center gap-8">    
          <img src={percentage} width={40} height={40}></img>    
        <div>
        <h2 className="text-xl font-semibold">Remaining % of Travel</h2>
        <h4 className="text-[#7b7e83] font-medium text-lg">24%</h4>
        </div>
      </div>
    </div>
  )
}

export default Details