import React from 'react';
import './css/ninjas.css'

const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.map(ninja => {

      if (ninja.age > 20){
      return (
        <div className="ninja" key={ ninja.id }>
          <div>Name: { ninja.name }</div>
          <div>Age: { ninja.age }</div>
          <div>Belt: { ninja.belt }</div>
          <button className="btn btn-danger btn-sm" onClick={ ()=> {deleteNinja(ninja.id)} }>Delete Ninja</button>
        </div>
      )
      }
      
      else {
        return null
      }
    })

    return (
     <div className="ninja-list">
       { ninjaList }
     </div> 
    )
}


export default Ninjas;
