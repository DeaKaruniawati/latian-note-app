import { useState } from "react";
import { handleLogin, setTokens } from "../api";


function Login({onLogin}) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleClick = async () => {
        const login = await handleLogin(email,password);
        if(login.status === 200){
             setEmail("")
             setPassword("")
             setTokens(login.data.data.accessToken)
             onLogin(login.data.data.accessToken)
             alert(login.data.message)
        }else{
         const {email=[],password=[]} = login.data.errors;
         const err = [...email,...password];
         alert(err.join("\n"));
        }
     }
 

    return (
        <div className="container py-7 px-5 bg-gray-600 mt-[50px] rounded-3xl">
        <h1 className='text-center text-4xl p-5 py-10 text-white'>Login</h1>
        <div className="flex flex-col items-center">
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" className="input w-[50%]"></input>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password" className="input w-[50%]"></input>
 
            <button onClick={handleClick} className="bg-slate-500 text-white text-lg rounded-3xl px-5 py-3 mt-4" >Submit</button>

        </div>
    </div>


    )
}

export default Login;