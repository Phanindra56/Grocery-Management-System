import { createContext, useContext, useState } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";
// Created a context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//Sharing the created context with other components
export default function AuthProvider({children}){

    //Putting some state in the context
    const[isAuthenticated,setAuthenticated] = useState(false)

    const[username,setUsername] = useState(null)

    const[token,setToken] = useState(null)

    // function login(username,password){
    //     if(username==='phani' && password === 'hari'){
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     }
    //     else{
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }

    // async function login(username,password){

    //     //Syntax should be correct and btoa stands for b64 encoding function
    //     const baToken = 'Basic ' + window.btoa( username + ':' + password )
        
    //     try{
    //     const response = await executeBasicAuthenticationService(baToken)
       
    //     if(response.status=200){
    //         setAuthenticated(true)
    //         setUsername(username)
    //         setToken(baToken)
    //         //interceptors is used to pass the tokens as header for basic auth
    //         apiClient.interceptors.request.use(
    //             (config) => {
    //                 console.log('intercepting and adding a token')
    //                 config.headers.Authorization  = baToken
    //                 return config
    //             }
    //         )

    //         return true
    //     }
    //     else{
    //         logout()
    //         return false
    //     }
    //     }
    //     catch(error){
    //         logout()
    //         return false

    //     }
    // }

    async function login(username,password){


        try{
        const response = await executeJwtAuthenticationService(username,password)
       
        if(response.status=200){
            
            //JWT token synatx is
            const jwtToken = 'Bearer ' + response.data.token
            
            setAuthenticated(true)
            setUsername(username)
            setToken(jwtToken)
            //interceptors is used to pass the tokens as header for basic auth
            apiClient.interceptors.request.use(
                (config) => {
                    console.log('intercepting and adding a token')
                    config.headers.Authorization  = jwtToken
                    return config
                }
            )

            return true
        }
        else{
            logout()
            return false
        }
        }
        catch(error){
            logout()
            return false

        }
    }

    function logout(){
        setAuthenticated(false)
        setUsername(null)
        setToken(null)

    }
    // setInterval(()=>setNumber(number+1),1000)
    return(
        <AuthContext.Provider value={{isAuthenticated,login,logout,username,token}}>
            {children}
        </AuthContext.Provider>
    )
} 