import React from "react";


function ResultList(props) {
  return (
    <div className="container">
      <br></br>
      <div className="card text-center">
        <div className="card-header">
          Puppy Love
        </div>
        <div className="card-body">
          <h5 className="card-title">You have a match!</h5>
          <img alt="puppy" className="img-fluid puppy" src={props.result.message} />
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <button onClick={props.handleClick} type="button" className="btn btn-danger">Bye! No thanks.</button>
          <span>     </span>
          <button onClick={props.handleClick} type="button" className="btn btn-success">Yes! Take home.</button>
        </div>
      </div>
    </div>
  );
}

export default ResultList;
