import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div class="card bg-dark text-white border-0">
          <img
            src="https://www.placesofjuma.com/wp-content/uploads/2019/04/iconsiam-1024x683.jpg"
            alt="background"
            height="550px"
          />
          <div class="card-img-overlay d-flex justify-content-center flex-column">
            <div className="container">
              <h5 class="card-title display-3 fw-bolder mb-0">
                New Season Arrivals
              </h5>
              <p class="card-text lead fs-2">Check all trends at our shop</p>
            </div>
          </div>
        </div>
        <Products />
      </div>
    </>
  );
};

export default Home;
