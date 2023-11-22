import React from 'react';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have gained experience in developing my projects. Here are some
          examples of projects I have worked on.
        </Desc>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
