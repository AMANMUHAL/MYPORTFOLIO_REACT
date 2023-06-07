import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name,description, img} = testiMonialDetail;
   
    return (
       <div className="item">
  <div className="shadow-effect">
    <img className="img-circle" alt="" src={img} />
    <h1>{name}</h1>
    <p>{description}</p>
  </div>
</div>

    );
};

export default TestiMonialsDetails;