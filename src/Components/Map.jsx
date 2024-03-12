import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const scriptUrls = [
      'https://js.api.here.com/v3/3.1/mapsjs-core.js',
      'https://js.api.here.com/v3/3.1/mapsjs-service.js',
      'https://js.api.here.com/v3/3.1/mapsjs-ui.js',
      'https://js.api.here.com/v3/3.1/mapsjs-mapevents.js',
    ];

    const loadScript = (url) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;

        script.onload = () => resolve();
        script.onerror = (error) => {
          reject(error);
          document.head.removeChild(script); // Clean up the script element in case of an error
        };

        document.head.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      try {
        for (const url of scriptUrls) {
          await loadScript(url);
        }

        // Check if the H object is now available
        if (window.H) {
          initializeHereMaps();
        } else {
          console.error('HERE Maps object (H) not found.');
        }
      } catch (error) {
        console.error('Failed to load one or more scripts:', error);
      }
    };

    const initializeHereMaps = () => {
      // Your HERE Maps initialization code...
      const platform = new window.H.service.Platform({
        apikey: '6mvha8UrzjALA2axKcZpFEub3dlwdKL6nY3vQWusXpc',
      });

      const defaultLayers = platform.createDefaultLayers();
      const map = new window.H.Map(document.getElementById('sujay'), defaultLayers.vector.normal.map, {
        center: { lat: 10.4957163, lng: 77.0364381 },
        zoom: 13,
        pixelRatio: window.devicePixelRatio || 1,
      });

      // Other HERE Maps initialization code...

      const behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map));
      const ui = window.H.ui.UI.createDefault(map, defaultLayers);

      // For example, you can add markers like this:
      const marker = new window.H.map.Marker({ lat: 10.4957163, lng: 77.0364381 });
      map.addObject(marker);
    };

    loadAllScripts();

    return () => {
      // Clean up function to remove the scripts when the component is unmounted
      scriptUrls.forEach((url) => {
        const scriptElement = document.querySelector(`script[src="${url}"]`);
        if (scriptElement) {
          document.head.removeChild(scriptElement);
        }
      });
    };
  }, []); // The empty dependency array ensures that the scripts are loaded only once on mount

  return (
    <div>
      <div id="sujay" style={{width:'1130px',height:'400px'}} className='w-full h-full border-black'></div>
    </div>
  );
};

export default Map;