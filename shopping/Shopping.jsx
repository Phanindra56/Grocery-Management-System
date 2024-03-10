import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './Shopping.css'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import ListShopComponent from './ListShopComponent'
import LogoutComponent from './LogoutComponent'
import ErrorComponent from './ErrorComponent'
import { useAuth } from './Security/AuthContext'
import AuthProvider from './Security/AuthContext'
import UpdateComponent from './UpdateComponent'

function AuthenticatedRoute({children}){
        const authContext =useAuth()
        
        // console.log(authContext.isAuthenticated)
        
        if(authContext.isAuthenticated)
            return children

        return <Navigate to = "/" />
    }


export default function Shopping(){
    return(
        <div className="Shopping">
        <AuthProvider>
            <BrowserRouter>
                <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />}> </Route> 
                        <Route path='/login' element={<LoginComponent />}> </Route>
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>                   
                                <WelcomeComponent />
                            </AuthenticatedRoute>}>
                        </Route>
                        <Route path='*' element={<ErrorComponent />}> </Route>
                        <Route path='/listshop' element={
                            <AuthenticatedRoute>                   
                                    <ListShopComponent />
                            </AuthenticatedRoute>} >
                        </Route>

                        <Route path='/updateshop/:id' element={
                            <AuthenticatedRoute>                   
                                    <UpdateComponent />
                            </AuthenticatedRoute>} >
                        </Route>

                        <Route path='/logout' element={
                            <AuthenticatedRoute>                   
                                    <LogoutComponent />
                            </AuthenticatedRoute>}>
                        </Route>
                    </Routes>
            </BrowserRouter>
                <FooterComponent />
        </AuthProvider>
        </div>
    )
}
