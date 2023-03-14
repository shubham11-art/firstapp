// import React from "react";

// function Para() {
//   return <p>This is my world</p>;
// }

// export default Para;

import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";

const Para = (property) => {
  const [line, setLine] = useState(false);
  const lineThrough = () => {
    setLine(true);
  };

  return (
    <div>
      <span onClick={lineThrough}>
        <DeleteForeverIcon />
      </span>
      <li
        style={{
          listStyle: "none",
          display: "inline",
          textDecoration: line ? "line-through" : "none",
        }}
      >
        {property.run}
      </li>
    </div>
  );
};
export default Para;
