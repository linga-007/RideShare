import logo from './logo.svg';
import './App.css';
import { Nav } from './Components/Nav';
import { DriverInfo } from './Components/DriverInfo';
import Map from './Components/Map';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Components/Login';

function App() {

  const route = createBrowserRouter([
   
{
  path:'/',
  element:<Login/>
} ,
   {
      path:"/Dash",
      element:<><Nav/><DriverInfo/></>
     
    }
    
  ]
  )
  return (
    <div>
      <RouterProvider router={route}/>
    </div>
     
  );
}

export default App;
