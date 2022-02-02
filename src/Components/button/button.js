import React from 'react';
import './button.css';
function Button({ id, title, active, setactivebtn }) {
  return (
    <button
      type="button"
      className={
        'btn rounded-pill fw-light px-2 px-md-4 m-1 m-md-2 ' +
        (active ? 'btn-dark' : 'btn-light')
      }
      key={id}
      onClick={() => setactivebtn(id)}
    >
      {title}
    </button>
  );
}

export default Button;
