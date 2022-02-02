import React from 'react';
const Card = ({ img, heading, para, subpara }) => {
  return (
    <div class="col-12 col-md-6 col-lg-4 p-0 m-0">
      <div class="shadow m-2 m-md-3 rounded">
        <img
          class="card-img-top"
          src={`./static/assets/images/${img}.png`}
          alt="check badge"
        />
        <div class="card-body rounded-bottom bg-black">
          <h4 class="card-title text-white">{heading}</h4>
          <button type="button" class="btn btn-grey py-1">
            <p className="text-white m-0">{para}</p>
            <p className="text-secondary m-0">{subpara}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
