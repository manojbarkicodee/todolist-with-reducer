import React, { useState,useEffect } from 'react'
import {Link} from "react-router-dom"
import styles from "./table.module.css"
const Products = () => {
    const [todos,settodos]=useState([])

    useEffect(() => {
    fetch("http://localhost:3004/posts").then((res)=>res.json()).then((res)=>settodos(res))  
    
     
    },[])
    console.log(todos)
  return (
    <div>
        <table className={styles.table}>
    <thead className={styles.thead}>
        <tr>

            <th className={styles.th}>Product Name</th>
            <th  className={styles.th} >Price</th>
            <th  className={styles.th}>more details</th>
        </tr>
        
    </thead>
    <tbody>
    {
    todos.map((el)=>(
          <tr  key={el.id}>
            <td className={styles.td}>{el.name}</td>
            <td className={styles.td}>{el.price}</td>
            <Link to={`/products/${el.id}`} ><td className={styles.td}>more details</td></Link>
        </tr>
    ))
}
        
    </tbody>
</table>



    </div>
  )
}

export default Products