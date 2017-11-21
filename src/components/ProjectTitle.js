import React from 'react'

class ProjectTitle extends React.Component{
  render(){
    return(
      <h2 className="project__title">{this.props.title}</h2>
    )
  }
}

export default ProjectTitle