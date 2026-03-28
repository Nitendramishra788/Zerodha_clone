import React from "react";

function NotFound() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5 img-fluid"
        />

        <h1 className="mt-4 mt-md-5">404 Not Found</h1>

        <p className="px-3 px-md-0">
          Sorry, the page you are looking for does not exist.
        </p>

        <button
          className="p-2 btn btn-primary mt-3"
          style={{
            width: "100%",
            maxWidth: "250px",
            margin: "0 auto",
            color: "white",
          }}
        >
          <b>Signup Now</b>
        </button>

      </div>
    </div>
  );
}

export default NotFound;