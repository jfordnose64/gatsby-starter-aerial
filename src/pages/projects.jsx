import React from 'react';
import '../components/projects.css';
import Container from '../components/container';

const projects = () => {
  return (
    <div>
      <p class="projects" style={{ fontSize: '3.5rem' }}>
        Projects{' '}
        <span style={{ fontSize: '1.5rem', color: 'black' }}>
          By Jackson Ford
        </span>
      </p>
      <Container />
    </div>
  );
};

export default projects;
