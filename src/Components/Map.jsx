import React from 'react'
import { useEffect, useRef } from 'react';
import H from '@here/maps-api-for-javascript';
const Map = (props) => {
    
        const mapRef = useRef(null);
        const map = useRef(null);
        const platform = useRef(null);
        // const { apikey, userPosition, restaurantPosition } = props;

        // useEffect(() => {
        //     // Hook definition...
        //   }, 
        //  // Dependencies array 
        //  [apiKey, userPosition, restaurantPosition]); 

        
        
  return (
    <div className='w-full border rounded-lg border-black'>

    </div>
  );

}


export default Map