import axios from "axios"
import { use, useEffect, useState } from "react"

function FetchGetExample() 
{
    const [tdata, SetTdata]=useState([]) 
    useEffect(() => {
        // fetch('http://localhost:3001/posts').then(res => res.json()).then((data) =>{
        //     console.log(data)
        //     SetTdata(data)
        // }).catch(console.log)
        axios.get('http://localhost:3001/posts').then((response)=>{
            SetTdata(response.data)
        })

    }, [])

    return(
        <div>
            <h1>user data</h1>
            <table width="300" border="1">
                <tbody>
                <tr >
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                </tr>
                {tdata.map((p,i)=> 
                <tr key={p.id}> 
                <td>{p.id}</td>
                <td>{p.name}</td> 
                <td>{p.email}</td> 
                <td>{p.address}</td> 
                </tr> )}
                </tbody>
            </table>
        </div>
    )
}

export default FetchGetExample;

//https://gorest.co.in/