import { createGroceryApi, updateGroceryApi } from "./api/ShopApiService"
import { useParams } from "react-router-dom"
import { useAuth } from "./Security/AuthContext" 
import { useEffect } from "react"
import { useState } from "react"
import { Field, Formik,  Form, ErrorMessage } from "formik"
import { retrieveGroceriesForUser } from "./api/ShopApiService"
import { useNavigate } from "react-router-dom"



export default function UpdateComponent(){
    
    const navigate=useNavigate()
    const {id} = useParams()
    const authContext = useAuth()
    const username = authContext.username

    const [description,setDescription] = useState('')
    const [date,setDate] = useState('')

    useEffect(
        () => retrieveGrocery(),
        [id]
    )

    function onSubmit(values){
        const shop ={
            id:id,
            username:username,
            description:values.description,    
            date:values.date,
            available:false
        }
        if(id==-1){
            createGroceryApi(username,shop)
            .then((response) =>{
                console.log(response)
                navigate('/listshop')
            })
            .catch(error => console.log(error))
        }
        
        else{
        updateGroceryApi(username,id,shop)
        .then(response =>{
            console.log(response)
            navigate('/listshop')
        })
        .catch(error => console.log(error))
    }
    }

    function validate(values){
        let errors={
            // description: 'Enter a valid description',
            // targetDate:'Enter a valid targetDate'
        }
        if(values.description.length<5)
        {
            errors.description='Enter atleast 5 Characters'
        }
        if(values.date == null || values.date == '' ) 
        {
            errors.date='Enter valid date'
        }
        console.log(errors)
        return errors
    }

    function retrieveGrocery(){
        
        if(id!=-1){
        retrieveGroceriesForUser(username,id)
        .then(response =>{
            setDescription(response.data.description)
            setDate(response.data.date)
        })  
        .catch(error => console.log(error))
        }
    }

    return(
        <div className="container">
            <h1>Enter Grocery Details: </h1>
            <div>
                <Formik initialValues={{description, date}} 
                        enableReinitialize={true}
                        onSubmit={onSubmit}
                        validate={validate}
                        validateOnChange={false}
                        validateOnBlur={false}
                >
                {
                    (props) =>(
                        <Form>
                            <ErrorMessage 
                                name="description"
                                component="div"
                                className="alert alert-warning"
                            />
                             <ErrorMessage 
                                name="date"
                                component="div"
                                className="alert alert-warning"
                            />
                            <fieldset className="form-group">
                               <label>Description</label>
                               <Field type="text" name="description" className="form-control" />
                            </fieldset>
                            <fieldset className="form-group">
                               <label>Target Date</label>
                               <Field type="date" name="date"  className="form-control" />
                            </fieldset>
                            <div>
                            <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>

                        </Form>
                    )

                }
                </Formik>
            </div>
        </div>
    )
}