import React from 'react';
import Button from '../button/button';
import './buttoncontainer.css';
function buttoncontainer({ buttonlist, activebtn, setactivebtn }) {
  return (
    <div className="d-flex flex-wrap">
      {buttonlist.map((data) => {
        return (
          <Button
            id={data.id}
            title={data.title}
            active={data.id === activebtn ? true : false}
            setactivebtn={setactivebtn}
          />
        );
      })}
    </div>
  );
}

export default buttoncontainer;
