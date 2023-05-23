import './Navbar.css';
import image from "../img/logo.png";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { ProjectsService } from '../service/ProjectsService';

export default function Navbar(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');

  useEffect(() => {
    const projectsService = new ProjectsService();

    const fetchData = async () => {
      try {
        const data = await projectsService.fetchData();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setSelectedProject(id);
  }, [id]);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedProject(selectedValue);
    navigate(`/project/${selectedValue}`);
  };

  return (
    <>
      <nav>
        <Link to="/" className="nav-link">
          <img src={image} alt="" />
        </Link>

        <select
          className="projectselect"
          value={selectedProject}
          onChange={handleSelectChange}
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
