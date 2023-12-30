import React  from 'react';
import './style.css';
import Menu from './MenuApi';

import Menucard from "./Menucard.js";

function Restaurant() {

    // now i am using useState hooks 
   
    const [menuData , setmenuData ] = React.useState(Menu);
    const filterItom = (category) =>{
      const updatelist = Menu.filter((ele)=>{
        return ele.category ===category;
      })
        
      setmenuData(updatelist);
    }
   

  return <>
    <h1 className='title'> Welcome To Pune Restaurant</h1>
    <nav className='navbar'>
       <div className='btn-group'>
         <button className='btn1' onClick={()=> filterItom('Breakfast')}>
          Breakfast </button>
          <button className='btn1' onClick={()=> filterItom('Lunch')}>
          Lunch </button>
          <button className='btn1' onClick={()=> filterItom('Evening')}>
          Evening </button>
          <button className='btn1' onClick={()=> filterItom('Dinner')}>
          Dinner </button>
          <button className='btn1' onClick={()=> setmenuData(Menu)}>
          All </button>

         
       </div>
    </nav>

      <Menucard  menuData ={menuData}/>
    <br></br>
      <div className='footer'>
       <div>Contact :</div> 
        <div>Mobile NO : 9373052232</div>
        <div>Email Id  : admin@gmail.com</div>
        <div>Address   : Kundan Park, Dharmaraj chowk , Pune 411 035</div>
      </div>
  </>
    
}

export default Restaurant;
