import { Link, Outlet } from "react-router-dom"

 export default function Layout({token, onLogout}){
    return(
        <>
       <div className="flex gap-2 py-2 h=[55px] items-center justify-around bg-slate-500">
            <h1 className="text-white text-2xl"> NOTE</h1>
            <nav className="flex gap-5 items-center ">
                {token !== null ? null : <Link to={"/Registrasi"}><span className="text-white font-sans hover:text-slate-300">Registrasi</span></Link>}
                {token !== null ? null : <Link to={"/Login"}><span className="text-white font-sans hover:text-slate-300">Login</span></Link>}
                <Link to={"/Note"}><span className="text-white font-sans hover:text-slate-300">Notes</span></Link>
                {token !== null ? <Link onClick={() => onLogout()}><span className="text-white font-sans hover:text-slate-300">Logout</span></Link> : null}
            </nav>
        </div>
        <Outlet/>
        </>
    )
}
