import { useState } from "react"

function FetchPutExample() 
{
    const [tdata, SetTdata]=useState(undefined) 
    function update(e){    
        
        const token ='d02b123bbe05ac5b0be7ddc458d9855c2463887e340c392c21d668cf65bf7274'
         const userId = 8319067;
            console.log("click")
        fetch(`https://gorest.co.in/public/v2/users/${userId}`, {
            method: 'PUT',
            body: JSON.stringify(
            {
                "name": "Viju Mali (updated)",
                "email": "mallivijay@gmail.com",
                "gender": "male",
                "status": "inactive"
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
            <h1>Update User</h1>
            <input type="button" value="POST DATA" onClick={update} />
                    
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

export default FetchPutExample;

//https://gorest.co.in/