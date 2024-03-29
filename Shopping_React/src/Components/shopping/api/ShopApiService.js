import { apiClient } from "./ApiClient";
// export  function retrieveHelloWorldBean(){
//     return   axios.get('http://localhost:8080/hello-world-bean')
// }

export const retrieveAllGroceriesForUsernameApi = (username) => apiClient.get(`/users/${username}/shop`)
export const retrieveGroceriesForUser = (username,id) => apiClient.get(`/users/${username}/shop/${id}`)
 
export const deleteGroceryApi = (username,id) => apiClient.delete(`/users/${username}/shop/${id}`)

//We need to send body so we are sending shop along with username and id
export const updateGroceryApi = (username,id,shop) => apiClient.put(`/users/${username}/shop/${id}`,shop)

export const createGroceryApi = (username,shop) => apiClient.post(`/users/${username}/shop`,shop)