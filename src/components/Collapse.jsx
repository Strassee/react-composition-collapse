import React, { useRef } from "react";

function Collapse( { collapsedLabel="Развернуть", expandedLabel="Cвернуть", collapse=false, children } ) {
  const example = useRef(null);
  let classList = "collapse";
  classList += collapse ? '' : " show";
  const handleClick = (e) => {
    if (example.current.classList.contains("show")) {
      example.current.classList.remove("show");
      e.target.textContent = collapsedLabel;
    } else {
      example.current.classList.add("show");
      e.target.textContent = expandedLabel;
    }
  }

  return (
    <div className="">
      <p>
      <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handleClick}>
        {collapse ? collapsedLabel : expandedLabel}
      </button>
      </p>
      <div className={classList} id="collapseExample" ref={example}>
        {children}
      </div>
    </div>
  )
}

export default Collapse;
