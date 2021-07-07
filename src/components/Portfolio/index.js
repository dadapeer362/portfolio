import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import HomeSection from '../HomeSection'
import AboutSection from '../AboutSection'
import ProjectsSection from '../ProjectsSection'
import ContactSection from '../ContactSection'
import SocialMediaSection from '../SocialMediaSection'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'HOME',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'ABOUT',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'PROJECTS',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]

// Write your code here

class Portfolio extends Component {
  state = {Home: true, About: false, Projects: false, Contact: false}

  showContent = (id, name) => {
    if (id === 0) {
      document.getElementById(0).classList.add('light-show')
      document.getElementById(1).classList.remove('light-show')
      document.getElementById(2).classList.remove('light-show')
      document.getElementById(3).classList.remove('light-show')
      this.setState({Home: true, About: false, Projects: false, Contact: false})
    } else if (id === 1) {
      document.getElementById(0).classList.remove('light-show')
      document.getElementById(1).classList.add('light-show')
      document.getElementById(2).classList.remove('light-show')
      document.getElementById(3).classList.remove('light-show')
      this.setState({Home: false, About: true, Projects: false, Contact: false})
    } else if (id === 2) {
      document.getElementById(0).classList.remove('light-show')
      document.getElementById(1).classList.remove('light-show')
      document.getElementById(2).classList.add('light-show')
      document.getElementById(3).classList.remove('light-show')
      this.setState({Home: false, About: false, Projects: true, Contact: false})
    } else if (id === 3) {
      document.getElementById(0).classList.remove('light-show')
      document.getElementById(1).classList.remove('light-show')
      document.getElementById(2).classList.remove('light-show')
      document.getElementById(3).classList.add('light-show')
      this.setState({Home: false, About: false, Projects: false, Contact: true})
    }
  }

  showHomePage() {
    const {Home, About, Projects, Contact} = this.state
    if (Home === true) {
      return <HomeSection />
    }
    return null
  }

  showAboutPage() {
    const {Home, About, Projects, Contact} = this.state
    if (About === true) {
      return <AboutSection />
    }
    return null
  }

  showProjectsPage() {
    const {Home, About, Projects, Contact} = this.state
    if (Projects === true) {
      return <ProjectsSection />
    }
    return null
  }

  showContactPage() {
    const {Home, About, Projects, Contact} = this.state
    if (Contact === true) {
      return <ContactSection />
    }
    return null
  }

  render() {
    return (
      <div className="bg-container">
        <ul className="nav-container">
          <img
            className="profile-img-style"
            src="https://assets.ccbp.in/frontend/react-js/portfolio-profile-img.png"
            alt="profile"
          />
          {navBarItems.map(eachNavBar => (
            <NavBar
              navBarItem={eachNavBar}
              key={eachNavBar.id}
              showContent={this.showContent}
            />
          ))}
        </ul>
        <div className="home-social-media-section">
          <div className="home-container">
            {this.showHomePage()}
            {this.showAboutPage()}
            {this.showProjectsPage()}
            {this.showContactPage()}
          </div>
          <div className="social-media-container">
            <SocialMediaSection />
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
