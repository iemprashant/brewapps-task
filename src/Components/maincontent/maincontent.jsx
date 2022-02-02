import React, { useState } from 'react';
import Buttoncontainer from '../buttoncontainer/buttoncontainer';

const Maincontent=(props)=> {
  const buttonlist = [
    { id: 1, title: '24h Training' },
    {
      id: 2,
      title: 'Latest Shows',
    },
    {
      id: 3,
      title: 'Most Popular',
    },
    {
      id: 4,
      title: 'In Genesis',
    },
    {
      id: 5,
      title: 'In Temple',
    },
    {
      id: 6,
      title: 'In Void',
    },
    {
      id: 7,
      title: '#BAYC',
    },
  ];
  const [activebtn, setactivebtn] = useState(1);
  return (
    <div className='py-3 '>
      <Buttoncontainer
        buttonlist={buttonlist}
        activebtn={activebtn}
        setactivebtn={setactivebtn}
      />
    </div>
  );
}

export default Maincontent;
