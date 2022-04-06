import React from "react";

export default function Service(props) {
  const {title, icon, detail} = props;
  return (
    <div className="col-12 col-md-4 p-4">
      <div className="card border-0 text-center">
        <i class={`${icon} text-primary`}></i>
        <div className="card-body mt-2 ">
          <h6 className="card-title">{title}</h6>
          <p className="card-text mt-4">
                {detail}
          </p>
        </div>
      </div>
    </div>
  );
}
