
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/Shop.js";
import RootLayout from "./route/RootLayout";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/product' element={<Shop/>}></Route>
  </Route>
))

function App() {
  return <RouterProvider router={router}/>
}

export default App;
