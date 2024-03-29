import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Security/AuthContext'

export default function LoginComponent(){


    const [username,setUsername]=useState('phani')
    const [password,setPassowrd]=useState('')
    // const [showSuccessMessage,setShowSuccessMessage] = useState(false)
    const [showErrorMessage,setShowErrorMessage] = useState(false)
    const navigate=useNavigate()
    const authContext = useAuth()

    function HandleUsernameChange(event){
        setUsername(event.target.value)
    }

    function HandlePasswordChange(event){
        setPassowrd(event.target.value)
    }

    async function handleSubmit(event){
       if(await authContext.login(username,password)){
        // authContext.setAuthenticated(true)
        // console.log('success')
        // setShowSuccessMessage(true)
        // setShowErrorMessage(false)
        navigate(`/welcome/${username}`)
        }
        
        else{
        // authContext.setAuthenticated(false)
        // console.log('failed')
        // setShowSuccessMessage(false)
        setShowErrorMessage(true)
        }
    }

    // function SuccessMessageComponent(){
    //     if(showSuccessMessage){
    //     return  <div className='successMessage'>Authentication Successful.</div>
    //     }
    //     return null
    // }
    
    // function ErrorMessageComponent(){
    //     if(showErrorMessage){
    //     return  <div className='errorMessage'>Authentication failed. Please check your credentials.</div>
    //     }
    //     return null
    // }
    
    return(
        <div className="Login">
            {/* <SuccessMessageComponent />
            <ErrorMessageComponent /> */}
            <h1>  Please Login Here:  </h1>

            {/* {showSuccessMessage && <div className='successMessage'>Authentication Successful.</div>} */}
            {showErrorMessage && <div className='errorMessage'>Authentication failed. Please check your credentials.</div>}

            <div className="LoginForm"></div>
            <div>
                <label>Username: </label>
                <input type="text" name="username" value={username} onChange={HandleUsernameChange}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" value={password} onChange={HandlePasswordChange} />
            </div>
            <div>
                <button type="button" name="Login" onClick={handleSubmit} >Login </button>
            </div>
        </div>
    )
}