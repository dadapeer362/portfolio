import './index.css'
import {Component} from 'react'

const skillsData = [
  {
    id: 0,
    name: 'HTML',
  },
  {
    id: 1,
    name: 'Java Script',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'Java',
  },
  {
    id: 4,
    name: 'Python',
  },
  {
    id: 5,
    name: 'React',
  },
  {
    id: 6,
    name: 'Node',
  },

  {
    id: 7,
    name: 'Bootstrap',
  },
]

const educationData = [
  {
    id: 0,
    qualification: 'Graduation',
    qualificationSource: 'B.Tech(Computer Science)',
  },
  {
    id: 1,
    qualification: 'Intermediate',
    qualificationSource: 'St.Ann’s Jr College',
  },
  {
    id: 2,
    qualification: 'High School',
    qualificationSource: 'Kimberley EM School',
  },
]

// Write your code here

class AboutSection extends Component {
  stateValue = {dummyValue: 1}

  onGetEducationListItems() {
    const {dummyValue} = this.stateValue
    return educationData.map(eachItem => (
      <li className="education-list">
        <div className="icon-img-heading">
          <img
            className="list-icon-img"
            src="https://assets.ccbp.in/frontend/react-js/list-icon-img.png"
            alt="list-icon"
          />
          <h1 className="education-heading">{eachItem.qualification}</h1>
        </div>
        <h1 className="education-paragraph">{eachItem.qualificationSource}</h1>
      </li>
    ))
  }

  getSkillsListItems() {
    const {dummyValue} = this.stateValue
    return skillsData.map(eachItem => (
      <div>
        <p className="skills-list-container">{eachItem.name}</p>
      </div>
    ))
  }

  render() {
    return (
      <div className="about-container">
        <h1 className="about-heading">About</h1>
        <p className="about-paragraph">
          I started my journey in the world of computers from a young age. now
          I'm 21 years old. pursuing my Computer Science majors at Santa Clara
          University, USA. Web development is my center of interest.
        </p>
        <div className="education-skills-container">
          <ul className="education-container">
            <h1 className="education-main-heading">Education</h1>
            {this.onGetEducationListItems()}
          </ul>
          <div className="skills-container">
            <h1 className="education-main-heading">Skills</h1>
            <div className="skills-list">{this.getSkillsListItems()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutSection
