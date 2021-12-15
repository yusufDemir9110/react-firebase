import React from 'react'
import db from './firebase'
import './Kisi.css'
function Kisi({id,name,surname, name1, surname1,setName, setSurname}) {
    const sil=()=>{
        db.collection('kisiler').doc(id).delete()
    }
    const guncelle=()=>{
        db.collection('kisiler').doc(id).update({
            name:name1,
            surname:surname1
        })
        setName('')
        setSurname('')

    }
    return (
        <div className='kisi'>
                <h2>{name} {surname}</h2>
                <button onClick={sil}>Sil</button>
                <button onClick={guncelle}>guncelle</button>
        </div>
    )
}

export default Kisi
