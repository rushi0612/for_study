import axios from "axios";
import React, { useState } from 'react'

const FetchDeleteExample = () => {

const [id, setId]=useState("");
     function deleteUser() {
        //  const token = "d02b123bbe05ac5b0be7ddc458d9855c2463887e340c392c21d668cf65bf7274";
    
    //     fetch(`http://localhost:3001/posts/${id}`, {
    //   method: "DELETE",
    //     headers: {
    //         // 'Authorization': `Bearer ${token}`
    //     } 
    //  })
    //   .then(res => {
    //   if (res.status === 204) {
    //     alert(`${id} User Deleted Successfully `);
    //   }
    // })
    // .catch(console.log);
    axios.delete(`http://localhost:3001/posts/${id}`)
  .then(response => {
    console.log('Resource deleted successfully:', response.data);
  })
  .catch(error => {
    console.error('Error deleting resource:', error);
  });


  }

  return (
    <div>
        <h1>Delete User</h1>
        <input type="text" onChange={(e)=>setId(e.target.value)} placeholder="Enter Id" />
         <button onClick={deleteUser}>DELETE USER</button>
    </div>
  )
}

export default FetchDeleteExample



//https://gorest.co.in/