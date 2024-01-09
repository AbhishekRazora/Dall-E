import React from 'react'
import { createBrowserRouter,createRoutesFromElements,Route,Link,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/create-post' element={<CreatePost/>}/>
  </Route>
))
const App = () => {
  return (
  <RouterProvider router={router}/>
  )
}

export default App
