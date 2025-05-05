
import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";
import { Button } from "../../components/ui/button";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button className="bg-red-600 text-white"> </Button>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to LearnInst </h1>
          <p>Learn, Grow & Teach – Simple & Free</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>
      <div className="further">
        <div className="tag">
          <h2>No Ads, No Premium, No Distractions –</h2>
          <h2> Just Pure Learning Anytime!</h2>

        </div>

      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
