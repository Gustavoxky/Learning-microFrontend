import React from "react";
import Main from "./component/main";
import Footer from "./component/footer";
import Header from "./component/header/index";
import Cub from "./component/cub";


import './App.css'
// const RemoteApp = React.lazy(() => import("App2/App"));

const App = () => {
  return (
    <>
      <Header/>  
      <Main/>
      <Cub/>
      <Footer/>

      {/* <Suspense fallback={"loading..."}>
        <RemoteApp/>
      </Suspense> */}

    </>
      
  )
}

export default App;

