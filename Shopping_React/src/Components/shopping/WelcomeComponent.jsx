import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorld, retrieveHelloWorldBean, retrieveHelloWorldPathVariable  } from './api/HelloWorldApiService'
import { useAuth } from './Security/AuthContext'

export default function WelcomeComponent(){
    const {username} = useParams() 
    const myMessage = []
    const [message,setMessage]=useState(myMessage)

    const authContext = useAuth()

    function callHelloWorld(){
        console.log('called')
        retrieveHelloWorld(authContext.token)
        .then((response)=> successMessage(response))
        .catch((error) => errorMessage(error))
        .finally(()=>console.log('cleanup'))

        // retrieveHelloWorldBean()
        // .then((response)=> successMessage(response))
        // .catch((error) => errorMessage(error))
        // .finally(()=>console.log('cleanup'))

        // retrieveHelloWorldPathVariable('AWS')
        // .then((response)=> successMessage(response))
        // .catch((error) => errorMessage(error))
        // .finally(()=>console.log('cleanup'))


    }

    function successMessage(response){
        console.log(response)
        setMessage(response.data)
    }

    function errorMessage(error){
        console.log(error)
    }
    return(
        <div className="Welcome">
            <h1>  Welcome to Online Grocery System {username}</h1>
            <div>
                Manage you groceries <Link to='/listshop'>here</Link>
            </div>
            <div>
                <button className='btn btn-success m-5' onClick={callHelloWorld}>
                    Click here
                </button>
            </div>
            <div className="text-info">
                {message}
            </div>

        </div>
    )
}
