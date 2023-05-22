import './Navbar.css';
import image from "../img/logo.png";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { ProjectsService } from '../service/ProjectsService';

export default function Navbar(props) {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');

  useEffect(() => {
    const projectsService = new ProjectsService();

    const fetchData = async () => {
      const data = await projectsService.fetchData();
      setProjects(data);
    };

    fetchData();
  }, []);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedProject(selectedValue);
    window.location.href = `/project/${selectedValue}`;
  };

  return (
    <>
      <nav>
        <Link to="/" className="nav-link">
          <img src={image} alt="" />
        </Link>

        <select
          className="projectselect"
          name="pets"
          id="pet-select"
          onChange={handleSelectChange}
          value={selectedProject}
        >
          <option value="">-- Please choose a project --</option>
          {projects.map((item) => (
            <option key={item.id} value={item.id}>
              {item.id} | {item.name}
            </option>
          ))}
        </select>

        <div>
          <button>Login</button>
        </div>
      </nav>
    </>
  );
}
