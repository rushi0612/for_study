import axios from "axios"
import { useState } from "react"

function FetchPutExample() 
{
    const [tdata, SetTdata]=useState(undefined)
    const [id, setId]=useState(undefined)
    const [name, setName]=useState(undefined)
    const [email, setEmail]=useState(undefined) 
    const [address, setAddress]=useState(undefined)
    function postperson(e){    

       /* fetch(`http://localhost:3001/posts/${id}`, {
            method: 'Put',
            body: JSON.stringify(
            {
                "id": id,
                "name": name,
                "email": email,
                "address": address
            }
            ),
        headers:{
            "content-type":"application/json; charset=UTF-8",
            // 'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
            
        }   
    }).then(res => res.json())
    .then((data) => {
            console.log("success", data)
            SetTdata("Tnsert sucessfully")
    }).catch(()=>
        SetTdata("Tnsert failed")
    ) */

        axios.put(`http://localhost:3001/posts/${id}`, {
        "name": name,
        "email": email,
        "address": address
    }).then((response) => {
        SetTdata("Update sucessfully")
        // console.log("success", response.data)
    }).catch(()=>
        SetTdata("Update failed")
    );
        e.preventDefault();
    }

    return(
        <div>
            <h1>Data of Person</h1>
            <input type="text" onChange={(e)=>setId(e.target.value)} placeholder="Enter Id" /> <br /><br />
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" /> <br /><br />
            <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" /> <br /><br />
            <input type="text" onChange={(e)=>setAddress(e.target.value)} placeholder="Enter Adress" /> <br /><br />
            <input type="button" value="Update DATA" onClick={postperson} />
                    
         <p>{tdata}</p>
    </div>
  );

}

export default FetchPutExample;

