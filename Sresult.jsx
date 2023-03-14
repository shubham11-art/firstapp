import React from "react";

const Sresult = (props) => {
  const img = `http://source.unsplash.com/300x300/?${props.name}`;
  return (
    <>
      <div>
        <img src={img} alt="thapa" />
      </div>
    </>
  );
};
export default Sresult;
