import { useState } from 'react'
import './ToDoApp.css'

export default function ToDoApp(){
    return(
        <div className="ToDoApp">
            <LoginComponent/>
            {/* <WelcomeComponent/> */}
            </div>
    )
}

function LoginComponent(){


    const [userName, setUsername] = useState('Praveen')
    const [password, setPassword] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)



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

    
    function ErrorMessageComponent(){
        if(showErrorMessage){
        return <div className="errorMessage">User Authentication Failed. Please check your credentials.</div>
        }
        return null
    }

    return(
        <div className="Login">
            {showSuccessMessage && <div className="successMessage">User Authentication Successfull!!!</div>}
           <ErrorMessageComponent/>
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





