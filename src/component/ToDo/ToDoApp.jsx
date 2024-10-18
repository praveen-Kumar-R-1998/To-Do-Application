import { useState } from 'react'
import './ToDoApp.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

export default function ToDoApp(){
    return(
        <div className="ToDoApp">
            {/* Configuring browser router with Routes  */}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome' element={<WelcomeComponent/>}></Route>
                </Routes>
            </BrowserRouter>  
        </div>
    )
}

function LoginComponent(){


    const [userName, setUsername] = useState('Praveen')
    const [password, setPassword] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();


    function handleUserNameChange(event){
        // console.log(event);
        // console.log(event.target.value);
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        // console.log(event);
        // console.log(event.target.value);
        setPassword(event.target.value)
    }

    function handleSubmit(){
        // console.log(userName)
        // console.log(password)
        if(userName==='Praveen' && password==='abcd'){
            console.log('Success')
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate('/welcome')

        }else{
            console.log('Failed')
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    // function SuccessMessageComponent(){
    //     if(showSuccessMessage){
    //     return <div className="successMessage">User Authentication Successfull!!!</div>
    //     }
    //     return null
    // }

    
    // function ErrorMessageComponent(){
    //     if(showErrorMessage){
    //     return <div className="errorMessage">User Authentication Failed. Please check your credentials.</div>
    //     }
    //     return null
    // }

    return(
        <div className="Login">
            {/* Show <div>....</div> if condition one is true (showSuccessMessage)*/}
            {showSuccessMessage && <div className="successMessage">User Authentication Successfull!!!</div>}
            {showErrorMessage && <div className="errorMessage">User Authentication Failed. Please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="userName" value={userName} onChange={handleUserNameChange}/>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>

                <div>
                    <button type="button" name="Login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

    function WelcomeComponent(){
        return(
            <div className="Welcome">Welcome Component</div>
        )
    }





