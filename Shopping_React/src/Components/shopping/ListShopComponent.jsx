import { useEffect, useState } from "react"
import { useAuth } from './Security/AuthContext'
import { deleteGroceryApi, retrieveAllGroceriesForUsernameApi } from "./api/ShopApiService"
import { useNavigate } from "react-router-dom"

export default function ListShopComponent(){
    const today = new Date()
    const date = new Date(today.getFullYear()+12,today.getMonth()+10,today.getDay()+25)
    const authContext = useAuth()
    const username=authContext.username
    const [groceries,setGroceries] = useState([])
    const [message,setMessage] =useState(null)
    const navigate = useNavigate()
 
    //useEffect tell react that your component needs to do something after render.
    useEffect(
        () => {retrieveGroceries()},[]
    )

    function retrieveGroceries(){
       
        
        retrieveAllGroceriesForUsernameApi(username)
        .then(response => {
            setGroceries(response.data)
        })
        .catch(error => console.log(error))
    
    }

    function deleteGrocery(id){

        deleteGroceryApi(username,id)
        .then(
            ()=> {
            setMessage(`Delete of todo with id  ${id} is success`)
            retrieveGroceries()
            }
        )
        .catch(
            error => console.log(error)
        )
    }

    function updateGrocery(id){
        console.log('clicked ' +id )
        navigate(`/updateshop/${id}` )
    }

    function addGrocery(){
        navigate(`/updateshop/-1`)
    }
    

    
    
    
    // const shopping =[
    // {id:1,description:'Wheat',availableDate:targetDate,isAvailable:false},
    // {id:2,description:'Flour',availableDate:targetDate,isAvailable:true},
    // {id:3,description:'Soap',availableDate:targetDate,isAvailable:false},
    // {id:4,description:'Milk',availableDate:targetDate,isAvailable:false},
    // {id:5,description:'Rice',availableDate:targetDate,isAvailable:false}  ]
    
    return(
        <div className="container">
           
           <h1>You can add groceries here</h1>

            {message && <div className="alert alert-warning">
                {message}
            </div>}
            
            <div>
                Things to Buy
            </div>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>isAvailable?</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        groceries.map(
                            shop => (
                                <tr key={shop.id}>
                                    <td>{shop.id}</td>
                                    <td>{shop.description}</td>
                                    <td>{shop.date}</td>
                                    <td>{shop.available.toString()}</td>
                                    <td><button className="btn btn-warning" 
                                        onClick={() => deleteGrocery(shop.id)}>Delete</button>  </td> 
                                    <td><button className="btn btn-success" 
                                        onClick={() => updateGrocery(shop.id)}>Update</button>  </td> 


                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>

                
            </div>
            <div> <button className="btn btn-success m-5" onClick={addGrocery}>Add Grocery</button></div>

        </div>
    )
}