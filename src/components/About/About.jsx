import React from "react";
import "./../About/About.css";
import Button from "../Button";

const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="about-heading">Our Vision</h1>
      <p className="about-content text-center">
        The vision of 3dotlink is to be a transformative force at the
        intersection of culture, art, and technology within the Web3 landscape.
        We envision a digital realm where the rich tapestry of cultural
        traditions, especially the intricate artistry of masks from diverse
        ethnic groups, is seamlessly woven into the fabric of the digital age.
        Our vision extends far beyond mere NFTs; it's about the preservation and
        celebration of cultural heritage in a dynamic, ever-evolving digital
        space. We strive to empower artists and creators, offering them a unique
        canvas to bring their cultural art to life while harnessing the
        capabilities of AI technology. We see 3dotlink as a bridge between the
        past and the future, where ancient rituals and modern innovation
        converge, enriching our collective human experience and fostering a
        global community united by a shared appreciation for the art, history,
        and culture that defines us. In essence, our vision is to unlock the
        immense potential of cultural art within Web3, inviting the world to
        explore, create, and treasure the beauty of diverse traditions through
        the digital realm.
      </p>
      <Button val={"Read More"}/>
    </div>
  );
};

export default About;
