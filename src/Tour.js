import React, { useState } from 'react';

const Tour = ({id, name, info, image, price, removeTour}) => {
  const [readMore, setreadMore] = useState(false);
  return <article className='single-tour'>
    <img src={image} alt={name}/>
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>{price}</h4>
        
      </div>
      <p>{readMore?info:`${info.substring(0,50)}...`}
      <button className='' onClick={()=>setreadMore(!readMore)}>{readMore?'show less':'show more'}</button></p>
      <button onClick={()=>{removeTour(id)}} className='delete-btn'>Not Interested</button>
    </footer>
  </article>;
};

export default Tour;
