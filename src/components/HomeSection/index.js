// Write your code here
import './index.css'
import {Component} from 'react'

class HomeSection extends Component {
  render() {
    return (
      <div className="home-section-container">
        <div>
          <h1 className="profile-name">Sophie Millers</h1>
          <p className="developer-heading">Full Stack Developer</p>
          <p className="paragraph-2">
            Experienced in MongoDB, Express, ReactJS and Node.js, Bootstrap,
            HTML, CSS, SQL and Python.
          </p>
          <div className="btn-container">
            <button className="btn-style">View Resume</button>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeSection
