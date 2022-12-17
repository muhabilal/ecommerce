import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.pic} style={{ height: props.height }} />
        <div className="card-body">
          <h5 className="card-title text-success">{props.title}</h5>
          <p className="card-text ">{props.description}</p>
          <Link to="#">{props.Link}</Link>
        </div>
      </div>
      {/* <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Card;
