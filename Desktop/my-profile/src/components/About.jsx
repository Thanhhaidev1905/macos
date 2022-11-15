import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-10 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          labore maxime sit, debitis illum eos libero aspernatur neque voluptas
          atque in temporibus sequi nam optio nisi, quibusdam modi amet quod!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
          tempora, quaerat ullam nulla porro omnis aliquam natus eligendi.
          Soluta voluptatum necessitatibus praesentium amet illo neque placeat
          et pariatur ab. Non, alias amet ipsum sit minus quae fugit incidunt,
          ad voluptatem iure optio, enim pariatur corporis maxime fuga earum
          quasi a?
        </p>
      </div>
    </div>
  );
};

export default About;
