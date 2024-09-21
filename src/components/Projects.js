import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
import workflow from "../assets/img/Workflow.png";
import partyPlaylist from "../assets/img/party-playlist-maker.png";
import portfolio from "../assets/img/portfolio.png"; // Portfolio image
import firebase from "../assets/img/firebase.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Mobile Attendance System with Fingerprint Sensor",
      description: "Developed a mobile application that integrates fingerprint authentication for attendance tracking.",
      imgUrl: workflow,
      githubUrl: "https://github.com/print-ramcharan/mobile-attendance-sytem-with-integrated-fingerprint-sensor"
    },
    {
      title: "Party Playlist Maker",
      description: "Created an app that allows users to create and share playlists, integrating Spotify authentication, a sync service, and Firebase for data management.",
      imgUrl: partyPlaylist,
      githubUrl: "https://github.com/print-ramcharan/party-playlist-maker"
    },
    {
      title: "Web Portfolio",
      description: "Customized and adapted a template to create a personal portfolio website, showcasing my projects and skills while reflecting my journey as a developer.",
      imgUrl: portfolio,
    },
    {
      title: "Data Management with Firebase",
      description: "Set up Firebase Realtime Database for storing user data and application state, enhancing real-time data handling.",
      imgUrl: firebase,
      githubUrl: "https://github.com/print-ramcharan/firebase-data-management" // Replace this with the actual URL if available
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I am a passionate CSE student currently pursuing my bachelor's at CBIT, with hands-on experience in software development and a strong foundation in various programming languages and technologies. visit my github for full code. Below are some key projects I've developed:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">My Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Skills & Technologies</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">About Me</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                githubUrl={project.githubUrl} // Ensure this is passed correctly
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Proficient in Java, Kotlin, React, and Firebase, I have a keen interest in building efficient, scalable applications. I am constantly exploring new technologies to enhance my skills.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>As a developer, I enjoy turning ideas into reality through coding. My projects reflect my dedication to creating intuitive user experiences and my passion for technology.</p>
                      <p>If you have an idea that you want to bring to life, feel free to contact me! I can provide you with a quote based on your requirements.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
}
