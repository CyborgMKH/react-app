import React from "react";
import Product from "./Product";
import About from "./About";

const Home = () => {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <div>
        <About />
        {arr.map((i) => (
          <Product value={i} key={i} />
        ))}
      </div>
      <div>
        <p>This is a paragraph hai guys.....!</p>
      </div>
    </>
  );
};

export default Home;
