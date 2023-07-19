import React, { useState } from 'react';
import "../css/Createcategory.css"
function CreateCategory() {
  const [value, setValue] = useState('');
  const [state,setState]=useState()

  const handleClick = () => {
    const url = 'http://localhost:8000/api/categories';
    const accessToken = localStorage.getItem('token');

    const data = {
      name: value 
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
       console.log(data) 
        if(data?.data?.id);{
        setState('category created successfully')
    }
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
        setState('something went wrong  ')
      });
  }; 
  return (
    <div className='createcategory'>
      <input type='text' onChange={e => setValue(e.target.value)} placeholder='Create New Category...' />
      <button onClick={handleClick} className='button'>Add</button>
      <p className='Category'>{state!=''?state:null} </p>
    </div>
  );
}

export default CreateCategory;