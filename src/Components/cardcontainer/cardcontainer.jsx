import React from 'react';
import Card from '../card/Card';
import './cardcontainer.css';
const Cardcontainer=({cardlist})=>{
  return (
        <div class="d-flex flex-wrap">
          {cardlist.map((data) => {
        return (
          <Card
            key={data.id}
            img={data.img} heading={data.heading} para={data.para} subpara ={data.subpara}
          />
        );
      })}
        </div>
  );
}

export default Cardcontainer;
