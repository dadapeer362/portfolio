import './index.css'
import {Component} from 'react'

const projectsData = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/advanced-technologies-img.png',
    name: 'Advanced Technologies',
  },
  {
    id: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/your-moment-is-complete-img.png',
    name: 'Your Moment Is Complete',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/robotics-img.png',
    name: 'Robotics',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-meals-img.png',
    name: 'Happy Meals',
  },
]

// Write your code here

class ProjectsSection extends Component {
  stateValue = {dummy: 1}

  onGetProjectsImages() {
    const {dummy} = this.stateValue
    return projectsData.map(eachItem => (
      <div>
        <img
          className="project-img-style"
          src={eachItem.imageUrl}
          alt={eachItem.name}
        />
        <h1 className="project-name">{eachItem.name}</h1>
      </div>
    ))
  }

  render() {
    return (
      <div className="projects-container">
        <h1 className="my-work-heading">My Work</h1>
        <div className="project-image-container">
          {this.onGetProjectsImages()}
        </div>
      </div>
    )
  }
}

export default ProjectsSection
