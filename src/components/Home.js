import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/717vGSkvcmL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
           
            id="2343344"
            title="The Lean Startup"
            image="https://th.bing.com/th/id/OIP.negu8toIAIp0qjr77J88-QHaLM?w=115&h=180&c=7&o=5&dpr=1.25&pid=1.7"
            rating={5}
            price={99.9}
          />
          <Product />
        </div>

        <div className="home__row">
          <Product id="2343344"
            title="The Lean Startup"
            image="https://th.bing.com/th/id/OIP.negu8toIAIp0qjr77J88-QHaLM?w=115&h=180&c=7&o=5&dpr=1.25&pid=1.7"
            rating={5}
            price={99.9}/>
          <Product id="2343344"
            title="The Lean Startup"
            image="https://th.bing.com/th/id/OIP.negu8toIAIp0qjr77J88-QHaLM?w=115&h=180&c=7&o=5&dpr=1.25&pid=1.7"
            rating={5}
            price={99.9}/>
          <Product id="2343344"
            title="The Lean Startup"
            image="https://th.bing.com/th/id/OIP.negu8toIAIp0qjr77J88-QHaLM?w=115&h=180&c=7&o=5&dpr=1.25&pid=1.7"
            rating={5}
            price={99.9}/>
        </div>

        <div className="home__row">
          <Product id="2343344"
            title="The Lean Startup"
            image="https://th.bing.com/th/id/OIP.negu8toIAIp0qjr77J88-QHaLM?w=115&h=180&c=7&o=5&dpr=1.25&pid=1.7"
            rating={5}
            price={99.9}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
