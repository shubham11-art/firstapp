import React, { useEffect } from "react";

const ChildData = (props) => {
  let surName = "Gunjal";
  return (
    <>
      <h1>Lifting State Up : {props.name(surName)}</h1>
    </>
  );
};
export default ChildData;
