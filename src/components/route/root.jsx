import { Outlet } from "react-router-dom";
import Navbar from "../navbar/nav";

const Root = () => {
    return ( <>
        <Navbar/>
        <Outlet/>
        
    </> );
}
 
export default Root;