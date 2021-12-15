import React, { useState } from 'react'
import db, { auth } from './firebase'
import './Home.css'
function Home({user}) {
    const [name,setName]=useState('')
    const [surname,setSurname]=useState('')

    const add=(e)=>{
        e.preventDefault()
        db.collection('kisiler').add({
            name:name,
            surname:surname
        })
        setName('')
        setSurname('')
    }
    return (
        <div className='home'>
            <h2>hosgeldiniz {user.displayName}</h2>
            <button onClick={()=>auth.signOut()}>Cikis yap</button>
            <form>
                isim <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
                soyisim <input type='text' value={surname} onChange={(e)=>setSurname(e.target.value)}></input>
                <button onClick={add}>ekle</button>
            </form>
        </div>
    )
}

export default Home
