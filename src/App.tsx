import { Outlet } from "react-router"
import CommonLayout from "./components/layout/Common.layout"



function App() {


  return (
    <>


      <CommonLayout>
        <Outlet />
      </CommonLayout>

    </>
  )
}

export default App
