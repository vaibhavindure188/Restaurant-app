import React from 'react'
import './style.css'

const Menucard = ({menuData})  =>{
    
   return(<div className='body'>
   
   <section className='section'><br></br>
      
          {menuData.map((ele) =>{  
            return( 
                <>
      
      <div className="classContainer" key={ele.id}>
        <div className="card">
            <div className='cardBody'>
              <span className='card-number'> {ele.id}</span><br></br>
              <span className='card-author'>{ele.category}</span>
              <h2 className='card-title'>{ele.name}</h2>
              <span className='card-desc'> {ele.description} In the heart of a bustling city, there exists a hidden gem of a restaurant known only to those who truly appreciate culinary artistry. As you step through the rustic wooden doors
                  <br></br>     <br></br> 
               <div  className='cost'>{ele.price}</div>
               </span>
               {/* <div className='img2'></div> */}
                <img src={ele.image} alt='this isImage' className='img'></img> <br></br><br></br>
                <a href='https://www.google.com/'><div className='shop-now'>Shop Now</div> </a>
            </div>
        </div>
      </div>

    </>
  )})}
  </section>   </div>)
}

export default Menucard;
