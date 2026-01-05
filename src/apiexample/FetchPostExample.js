import { useState } from "react"

function FetchPostExample() 
{
    const [tdata, SetTdata]=useState(undefined) 
    function postperson(e){    
        
        const token ='d02b123bbe05ac5b0be7ddc458d9855c2463887e340c392c21d668cf65bf7274'
            console.log("click")
        fetch('https://gorest.co.in/public/v2/users', {
            method: 'POST',
            body: JSON.stringify(
            {
                "name": "Vishwas  Patil",
                "email": "patilji@gmail.com",
                "gender": "male",
                "status": "active"
            }
            ),
        headers:{
            "content-type":"application/json; charset=UTF-8",
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
            
        }   
    }).then(res => res.json())
    .then((data) => {
            console.log(data)
            SetTdata(data)
    }).catch(console.log)
    e.preventDefault();
    }
    return(
        <div>
            <h1>Data of Person</h1>
            <form action="Onclick">

            </form>
            <input type="button" value="POST DATA" onClick={postperson} />
                    
          {tdata && (
        <div>
          <p>ID: {tdata.id}</p>
          <p>Name: {tdata.name}</p>
          <p>Email: {tdata.email}</p>
          <p>Status: {tdata.status}</p>
        </div>
            )}
    </div>
  );

}

export default FetchPostExample;

//https://gorest.co.in/