/* eslint-disable jsx-a11y/anchor-has-content */
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const projctlink = link;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <a
          className="hover:opacity-50 transition duration-500"
          href={`https://${projctlink}`}
          target="_blank"
          rel="noreferrer"
        >
          {link}{" "}
        </a>
      </div>
      <img
        style={{ height: "400px" }}
        src={`../assets/${projectTitle}.jpeg`}
        alt={projectTitle}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Making portfolio,E-commerce,Management System,Inventory etc based on
          client requirement.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            PROJECT STARTED FROM HERE
          </div>
          <Project title="valogari" link={`bhalogari.com`} />
          <Project title="soleilei" link={`soleil-confiance.co.jp`} />

          {/* ROW 2 */}
          <Project title="sunshine" link={`sunshineinitiatives.com`} />
          <Project title="family" link={`family-bonding.com`} />
          <Project title="mecago" link={`meekago.com`} />

          {/* ROW 3 */}
          <Project title="restourent" link={`restourent-ui.vercel.app`} />
          <Project title="Project 7" link={`sunelectronics.softlabit.com`} />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            PROJECT ENDED FROM HERE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
