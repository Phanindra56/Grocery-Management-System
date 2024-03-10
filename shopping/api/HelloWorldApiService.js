import { apiClient } from "./ApiClient";

// export  function retrieveHelloWorldBean(){
//     return   axios.get('http://localhost:8080/hello-world-bean')
// }

// export const retrieveHelloWorld = () => apiClient.get('/hello-world')

export const retrieveHelloWorldBean = () => apiClient.get('/hello-world-bean')

export const retrieveHelloWorldPathVariable = 
    (username) => apiClient.get(`/hello-world-/path-variable/${username}`)
    // ,{
    //     headers:{
    //         Authorization:token
    //     }
    // })

//response to preflight request doesn't pass access control check => Authorization header
export const retrieveHelloWorld =
    () => apiClient.get(`/hello-world`)
