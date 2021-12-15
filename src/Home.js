import React, { useEffect, useState } from 'react'
import db, { auth } from './firebase'
import './Home.css'
import Kisi from './Kisi'
function Home({ user }) {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [kisiler, setKisiler] = useState([])

    useEffect(() => {
        db.collection('kisiler').onSnapshot(snapshot =>
            setKisiler(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()

                }))
            )
        )
    }, [])

    const add = (e) => {
        e.preventDefault()
        db.collection('kisiler').add({

            name: name,
            surname: surname
        })
        setName('')
        setSurname('')
        
    }
    return (
        <div className='home'>
            <h2>hosgeldiniz {user.displayName}</h2>
            <button onClick={() => auth.signOut()}>Cikis yap</button>
            <form>
                isim <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                soyisim <input type='text' value={surname} onChange={(e) => setSurname(e.target.value)}></input>
                <button onClick={add}>ekle</button>
            </form>

            <div className='home__kisiler'>
                {
                    kisiler.map(({id, data })=>(
                        <Kisi key={id} id={id} name={data.name} surname={data.surname} surname1={surname} name1={name} setSurname={setSurname} setName={setName}/>

                    ))
                }
            </div>
        </div>
    )
}

export default Home
