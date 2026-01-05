import React from 'react'

const FetchDeleteExample = () => {

     function deleteUser() {
         const token = "d02b123bbe05ac5b0be7ddc458d9855c2463887e340c392c21d668cf65bf7274";
    const userId = 8115255;

        fetch(`https://gorest.co.in/public/v2/users/${userId}`, {
      method: "DELETE",
        headers: {
            'Authorization': `Bearer ${token}`
        } 
     })
      .then(res => {
      if (res.status === 204) {
        alert(`${userId} User Deleted Successfully `);
      }
    })
    .catch(console.log);
  }

  return (
    <div>
        <h1>Delete User</h1>
         <button onClick={deleteUser}>DELETE USER</button>
    </div>
  )
}

export default FetchDeleteExample



//https://gorest.co.in/