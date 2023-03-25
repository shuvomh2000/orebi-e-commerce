
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import Home from "./pages/home";
import Shop from "./pages/Shop.js";
import RootLayout from "./route/RootLayout";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/product' element={<Shop/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contacts' element={<Contacts/>}></Route>
  </Route>
))

function App() {
  return <RouterProvider router={router}/>
}

export default App;
