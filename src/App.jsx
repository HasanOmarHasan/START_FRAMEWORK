import React, { Component } from "react";
import Layout from "./Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About as/About";
import Conect from "./About as/Conect";
import Portfolio from "./Portfilo/portfolio";
import NotFond from "./Layout/NotFond";

const route = createBrowserRouter([
  {
    path : '' , element: <Layout />, children: [
      {path:'/home', element:<Home/>},
      {index:true, element:<Home/>},
      {path:'/about', element:<About/>},
      {path:'/Conect', element:<Conect/>},
      {path:'/portfolio', element:<Portfolio/>},
      {path:'*', element:<NotFond/>},
  
    ]
  },
])


export default class App extends Component {
  render() {
    return <>
      <RouterProvider  router={route}/>
    </>;
  }
}
