import chefs from "../assets/images/chefs.jpg";
import restaurant from "../assets/images/restaurant.jpg";
import React from "react";

const About = () => {
  return (
    <>
      <div className="flex gap-5 px-5 my-5">
        <div className="flex flex-col w-2/3 gap-5 justify-center text-black">
          <h1 className="text-5xl font-bold text-[#495e57]">Little Lemon</h1>
          <h2 className="text-2xl font-bold">Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.</p>
        </div>
        <div className="w-1/3">
          <img src={chefs} alt="chefs" />
          <img src={restaurant} alt="restaurant" />
        </div>
      </div>
    </>
  );
};

export default About;
