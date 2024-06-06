import React from 'react';
import './about.css';
import Layout from './Layout/Layout';

const About = ({ setRoute }) => {
  return (
    <Layout setRoute={setRoute}>
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img
              className="image1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQjsC6aRapNFRXl4tDirS4Mf3-R6Bckq4mA&s"
              alt="Business Statistics"
              width={150}
            />
          </div>
          <div className="text-container-about">
            <h1>About EACamp</h1>
            <p>
              EACamp is a comprehensive platform offering programming courses designed to empower learners with the skills and knowledge necessary to excel in the rapidly evolving field of technology. With a focus on excellence, accessibility, and community, EACamp provides a dynamic learning environment tailored to the needs of students at every skill level.
            </p>

            <h2>Curriculum Excellence</h2>
            <p>
              EACamp's programming courses are meticulously crafted by industry experts and educators who possess deep knowledge and experience in their respective fields. The curriculum is regularly updated to reflect the latest trends, tools, and technologies in the tech industry, ensuring that students receive relevant and up-to-date instruction.
            </p>
            <ul>
              <li>Web Development: Frontend and Backend</li>
              <li>Mobile App Development: iOS and Android</li>
              <li>Data Science and Machine Learning</li>
              <li>Cloud Computing and DevOps</li>
              <li>Cybersecurity and Ethical Hacking</li>
              <li>UI/UX Design</li>
              <li>Software Engineering Principles</li>
              <li>And more...</li>
            </ul>

            <h2>Interactive Learning Experience</h2>
            <p>
              EACamp offers an immersive and interactive learning experience that goes beyond traditional lectures. Students have access to a variety of learning resources, including video lectures, coding exercises, projects, quizzes, and interactive coding environments. This hands-on approach enables students to apply theoretical concepts in real-world scenarios, solidifying their understanding and enhancing their problem-solving skills.
            </p>

            <h2>Dedicated Support and Mentorship</h2>
            <p>
              At EACamp, we believe in the power of community and collaboration. Students receive dedicated support from instructors, mentors, and fellow learners throughout their learning journey. Whether it's answering questions, providing feedback on projects, or offering career advice, our team is committed to helping students succeed.
            </p>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

