import { motion } from "framer-motion";
import Guvi from "../assets/Guvi.png";
import fcc from "../assets/fcc.png";
import PowerBI from "../assets/PowerBI.jpg";
import retail from "../assets/retail.png";
import Title from "../Component/Title";

const certifications = [
  {
    title: "Microsoft Power BI Desktop for Business Intelligence",
    subtitle: "Udemy",
    description: "Learned business intelligence with Power BI, data visualization, and DAX.",
    logo_path: PowerBI,
    certificate_link: "https://www.udemy.com/certificate/UC-a8eba6dd-c632-4447-a918-0fa036fc9854/",
  },
  {
    title: "Responsive Web Design Developer",
    subtitle: "FreeCodeCamp",
    description: "Completed web development course covering HTML, CSS, and Flexbox.",
    logo_path: fcc,
    certificate_link: "https://www.freecodecamp.org/certification/fcce3fc4616-0790-4d38-8adc-3456e9b8e10e/responsive-web-design",
  },
  {
    title: "Retail Management",
    subtitle: "NPTEL",
    description: "Learned retail strategy, marketing, and customer behavior.",
    logo_path: retail,
    certificate_link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24MG51S45040088130039181",
  },
  {
    title: "Generative AI",
    subtitle: "GUVI Geek Networks, IITM Research Park",
    description: "Explored AI-generated content, deep learning, and neural networks.",
    logo_path: Guvi,
    certificate_link: "https://www.guvi.in/verify-certificate?id=m1H69d72FgK153j28h",
  }
];

const Certificates = () => {
  return (
    <div className="section-trans overflow-x-hidden" id="certificates">
      <section className="container">
        <Title title="Certifications" />
    
        <motion.section
          className="container py-5"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          {/* Center the row */}
          <div className="d-flex justify-content-center">
            <div className="row g-4 justify-content-center">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="col-lg-3 col-md-4 col-sm-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    x: [0, -1, 1, -1, 1, 0],
                  }}
                >
                  <div className="card shadow-lg text-center p-3 d-flex flex-column h-100">
                    <div className="d-flex justify-content-center">
                      <img
                        src={cert.logo_path}
                        alt={cert.title}
                        className="rounded img-fluid"
                        style={{
                          maxWidth: "250px",
                          maxHeight: "250px",
                          objectFit: "contain",  // Ensures image maintains aspect ratio
                        }}
                      />
                    </div>
                    <div className="flex-grow-1 d-flex flex-column align-items-center"> {/* Align content in the center */}
                      <h5 className="mt-auto mb-2" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                        {cert.title}
                      </h5>
                      <p className="small text-center" style={{ marginBottom: '20px' }}>
                        {cert.description}
                      </p>
                    </div>
                    <div className="mt-auto"> {/* Aligns button at the bottom */}
                      <a
                        href={cert.certificate_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button type="button" className="btn">
                          View Certificate
                        </button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </section>
    </div>
  );
};

export default Certificates;
