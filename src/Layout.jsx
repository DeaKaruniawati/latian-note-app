import { Link, Outlet } from "react-router-dom"
import { useAuth } from "./contex/Auth"


 export default function Layout(){
    const {isLoggedin, doLogout} = useAuth()
    
    return(
        <>
       <div className="flex gap-2 py-2 h=[55px] items-center justify-around bg-slate-500">
            <h1 className="text-white text-2xl"> NOTE</h1>  {isLoggedin ? (
                <span className="font=bold">Sudah Login</span> 
            ) : (
                <span className="font=bold">Belum Login</span> 
            )}
            <nav className="flex gap-5 items-center ">

                {isLoggedin ? <>
                    <Link to={"/Note"}><p className="hover:text-amber-300">Note</p></Link>
                    <Link onClick={() => doLogout()}><span className="text-white font-sans hover:text-slate-300">Logout</span></Link> 

                </> : <> 
                 <Link to={"/Registrasi"}><p className="hover:text-amber-300">Registrasi</p></Link>
                <Link to={"/Login"} ><p className="hover:text-amber-300">Logout</p></Link>
           
                </>}
           
           
            

            </nav>
        </div>
        <Outlet/>
        </>
    )
}
