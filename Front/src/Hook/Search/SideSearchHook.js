import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { useState } from 'react';

const SideSearchHook = () => {

    
  const dispatch = useDispatch();
  const { category, loading, error } = useSelector(state => state.allCategories);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const [catChecked,setCatChecked]=useState([])
  
  // filter with category input 
  const clickCategory = (e) => {
   // console.log(e.target.checked);
    let value = e.target.value
    if(value==0){
      setCatChecked([])
    }
    else if(value==1){
      setCatChecked(category)
    }
    else{
        if(e.target.checked)
          setCatChecked([...catChecked,value])
          else if (e.target.checked === false) {
            const newArry = catChecked.filter((e) => e !== value)
            setCatChecked(newArry)
        }
        }
        
  }
  

  return [category,loading,clickCategory]
}

export default SideSearchHook
