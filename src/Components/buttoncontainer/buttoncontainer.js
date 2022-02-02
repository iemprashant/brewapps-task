import React from 'react';
import Button from '../button/button';

function buttoncontainer({ datalist, activebtnid, setactivebtnid }) {
  return (
    <div className=" p-2 d-flex flex-wrap">
      {datalist.map((data) => {
        return (
          <Button
            id={data.id}
            title={data.title}
            active={data.id === activebtnid ? true : false}
            setactive={setactivebtnid}
          />
        );
      })}
    </div>
  );
}

export default buttoncontainer;
