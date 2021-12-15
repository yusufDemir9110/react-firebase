import './Login.css'
import React from 'react'
import { auth, provider } from './firebase'


function Login() {
    const login = ()=>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message))
    }
    return (
        <div className='login'>
            <div className='container'>
                <button onClick={login}>Google ile giris</button>
            </div>    
        </div>
    )
}

export default Login
