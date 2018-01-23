import React from "react"

class ProjectImage extends React.Component {
  render() {
    return <img className="project__image" src={this.props.image} alt=" " />
  }
}

export default ProjectImage
