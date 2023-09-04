import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  
  return (<section>
    <div className='title'>Our Tours</div>
    <div className='tour'>
      {
        tours.map((tour)=>{
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
        })
      }
    </div>
  </section>);
};

export default Tours;
