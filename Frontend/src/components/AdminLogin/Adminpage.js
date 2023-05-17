import React from 'react'

export default function Adminpage() {
    
const authToken = localStorage.getItem('authToken');
fetch('http://127.0.0.1:3500/admins/', {
  headers: {
    'Authorization': `Bearer ${authToken}`
  }
})
.then(response => response.json())
    .then(data => {
      const token = data;
     console.log(token);
    
    })
.catch(error => {
  // handle error
});
  return (
    <div>Adminpage</div>
  )
}
