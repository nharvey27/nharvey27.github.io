import Project from "./Project"
import React from "react"

class ProjectsContainer extends React.Component {
  render() {
    return (
      <div className="projects">
        <h1 className="header">Personal Projects </h1>
        <Project />
      </div>
    )
  }
}
export default ProjectsContainer
