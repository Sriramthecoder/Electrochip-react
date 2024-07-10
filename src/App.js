
import Blog from './Pages/Blog';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Login from './Pages/Login';
import Service from './Pages/Service';

const routerConfig = createBrowserRouter([
  {"path":"",element:<Login/>},
  {"path":"/home",element:<Home/>},
  {"path":"/about",element:<About/>},
  {"path":"/contact",element:<Contact/>},
  {"path":"/service",element:<Service/>},
  {"path":"/blog",element:<Blog/>}
]);
function App() {
  return (
    <div className="App">
       <RouterProvider router={routerConfig}/>
      
    </div>
  );
}

export default App;


     


