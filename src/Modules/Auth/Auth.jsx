import { useEffect, createContext, useContext, useState } from "react"
import { getToken, handleLogin, removeToken, setTokens } from "../../config/api"

//nilai default
const initialAuthState = {
    isLoggedin: false,
    doLogin: () => { },
    doLogout: () => { },
}

// buat context
const AuthContext = createContext(initialAuthState)

// buat custom hook
const useAuth = () => {
    return useContext(AuthContext)
}

// buat provider
const AuthProvider = ({children}) => {
    // state
    const [isLoggedin, setIsLoggedin] = useState(false);

    useEffect(() => {
        const token = getToken()
        if (token != null){
            setIsLoggedin(true)
        }
    }, [])

    // function untuk handle Login
    const doLogin = async (email, password) => {
        //memanggil api menggunakan axios
        const apiResult = await handleLogin(email, password)


        //jika berhasil maka setIsLoggedin -> true
        //simpan token ke dalam local storage

        setIsLoggedin(true)
        setTokens(apiResult.data.data.accessToken)

        //jika gagal tampilkan peringatan
    }

    const doLogout = () => {
        setIsLoggedin(false)
        removeToken()

    }

    // return provider
    return (
        <AuthContext.Provider value={{isLoggedin, doLogin, doLogout}}>
            {children}
        </AuthContext.Provider>
    )
}


// export provider
export {AuthProvider,useAuth}