import { useState } from "react";
import { Register } from "../../config/api";

function Registrasi() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleRegister = async () => {
        const apiRegis = await Register(name,email,password);
        if(apiRegis.status === 201){
            setName("")
            setEmail("")
            setPassword("")
            alert(apiRegis.data.message)
        }else{
            const {name= [],email = [], password = []} = apiRegis.data.errors;
            const err = [...name,...email,...password]
            alert(err.join("\n"));
        }
    }

    return (
        <div className="container py-7 px-5 bg-gray-600 mt-[50px] rounded-3xl">
        <h1 className='text-center text-4xl p-5 py-10 px-4 text-white font-sans ' >Registrasi</h1>
        <div className="flex flex-col items-center">
            <input type="text" placeholder="Nama" className="input w-[50%]"></input>
            <input type="text" placeholder="Email" className="input w-[50%]"></input>
            <input type="text" placeholder="Password" className="input w-[50%]"></input>

            <button className="bg-slate-500 text-white text-lg rounded-3xl px-5 py-3 mt-4" >Registrasi</button>

        </div>
    </div>


    )
}

export default Registrasi;
