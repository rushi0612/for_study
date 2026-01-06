import React from 'react'

const FetchDeleteExample = () => {

     function deleteUser() {
        //  const token = "d02b123bbe05ac5b0be7ddc458d9855c2463887e340c392c21d668cf65bf7274";
    const id = 3;

        fetch(`http://localhost:3001/posts/${id}`, {
      method: "DELETE",
        headers: {
            // 'Authorization': `Bearer ${token}`
        } 
     })
      .then(res => {
      if (res.status === 204) {
        alert(`${id} User Deleted Successfully `);
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