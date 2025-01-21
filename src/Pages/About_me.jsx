import Lottie from "lottie-react";
import Title from "../Component/Title";
import animationData from "../assets/Animation - 1700169099201.json"
import { motion } from "framer-motion";

const About_me = () => {
  return (
    <div className="section-trans overflow-x-hidden" id="about_me">
      <section className="container">
        <Title title="About me" />
        <div className="d-flex justify-content-center align-items-center gap-2 flex-column flex-lg-row text-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="img order-1 order-lg-0 rounded d-none d-lg-block about-img"
          >
            <Lottie animationData={animationData} />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
          >
            <p className="text-start">
              My name is <span className="about-name fw-bold">Ananya</span>
              , and I am a dedicated front-end web developer. I have
              a passion for learning and creating new applications with fast,
              secure, and clean code.<br/>
          
              I design and develop services for customer of all sizes specalizing in creating stylish
              , modern websites , web services and online store , design and code beautifully simple things, 
              and I love what I do.
            </p>
            <div className="d-flex flex-column flex-md-row gap-3">
              {[
                {
                  text: "Download CV",
                  link: "https://drive.google.com/uc?export=download&id=1nBhZ60CEoUBjx7dmb9CsFBVEUisvscj3",
                },
                {
                  text: "Get in touch",
                  link: "#contact",
                },
                {
                  text: "Show Skills",
                  link: "#skills",
                },
              ].map((item, index) => (
                <div key={index} className="me-0 me-lg-4">
                  <a href={item.link}>
                    <button type="button" className="btn">
                      {item.text}
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About_me;
