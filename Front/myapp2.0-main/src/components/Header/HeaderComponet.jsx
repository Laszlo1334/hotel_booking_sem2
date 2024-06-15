import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HeaderComponet(props) {
  let [state, setState] = useState(false);

  useEffect(() => {
    setState(props.currentPage === props.typeOfPage);
  }, [props, state]);

  if (state) {
    return (
      <Link to={props.toLink} className="nav-element btn-act textblock ">
        {props.typeOfPage}
      </Link>
    );
  } else {
    return (
      <Link
        to={props.toLink}
        className="nav-element btn-light textblock gray-black-textblock"
      >
        {props.typeOfPage}
      </Link>
    );
  }
}

export default HeaderComponet;
