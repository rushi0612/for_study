import { use, useEffect, useState } from "react"

function FetchGetExample() 
{
    const [tdata, SetTdata]=useState([]) 
    useEffect(() => {
        fetch('https://gorest.co.in/public/v2/users').then(res => res.json()).then((data) =>{
            console.log(data)
            SetTdata(data)
        }).catch(console.log)
    }, [])
    return(
        <div>
            <h1>user data</h1>
            <table>
                <tbody>
                <tr>
                <th>ID</th>
                <th>Name</th>
                </tr>
                {tdata.map((p,i)=> 
                <tr key={p.id}> 
                <td>{p.id}</td>
                <td>{p.name}</td> 
                </tr> )}
                </tbody>
            </table>
        </div>
    )
}

export default FetchGetExample;


//https://gorest.co.in/