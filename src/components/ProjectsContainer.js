import React from "react"
import Project from "./Project"

class ProjectsContainer extends React.Component {
  render() {
    return (
      <div className="projects">
        <h1 className="project__header">Personal Projects </h1>
        <Project />
      </div>
    )
  }
}
export default ProjectsContainer
