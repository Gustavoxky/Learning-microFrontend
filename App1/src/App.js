import React from "react";
import Body from "./component/body";
import Footer from "./component/footer";
import Header from "./component/header/index";

// const RemoteApp = React.lazy(() => import("App2/App"));

const App = () => {
  return (
    <>
      <Header/>  
      <Body/>
      <Footer/>

      {/* <Suspense fallback={"loading..."}>
        <RemoteApp/>
      </Suspense> */}

    </>
      
  )
}

export default App;

