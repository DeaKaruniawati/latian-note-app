import { createContext, useContext, useEffect, useRef, useState } from 'react'
import * as authHelper from './AuthHelpers'
import { getUserByToken } from './_requests'

// Nilai default daristate dan function milik konteks Auth
const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  logout: () => {},
  operator: "",
  operatorLogin: () => {},
  operatorMesssage: ""
}

// membuat konteks dengan nilai default diatas
const AuthContext = createContext(initAuthContextPropsState)

// membuat custom hook untuk memanggil nilai dari konteks state
// custom hook ini akan dipanggil di child yang membutuhkan 
const useAuth = () => {
  return useContext(AuthContext)
}

// membuat provider, didisi dengan state dan function yang akan dipanggil
// atau digunakan di child
const AuthProvider = ({children}) =>  {
// ini state milik AuthProvider
  const [auth, setAuth] = useState(authHelper.getAuth())
  const [currentUser, setCurrentUser] = useState(undefined)
  const [opMessage, setOpMessage] = useState("")
  const [operator, setOperator] = useState("")

  // Ini function milik AuthProvider
  const saveAuth = (auth) => {
    setAuth(auth)
    console.log("saving auth")
    if(auth) {
      console.log("auth true")
      authHelper.setAuth(auth)
    } else {
      console.log("auth false")
      authHelper.removeAuth()
    }
  }


  const operatorLogin = (password, name) => {
    if (password == "123456") {
      setOperator(name)
    } else 
    setOpMessage("Login Operator Gagal")
  }

  const logout = () => {
    saveAuth(undefined)
    setCurrentUser(undefined)
  }

  // return provider berserta state & function yang akan diakses oleh child
  return (
    <AuthContext.Provider value={{auth, saveAuth, currentUser, setCurrentUser, logout, operator, operatorLogin, opMessage}}>
      {children}
    </AuthContext.Provider>
  )
}

// export provider & custom hook agar dipanggil dari file lain
export {AuthProvider, useAuth}