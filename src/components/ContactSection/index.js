// Write your code here
import './index.css'
import {Component} from 'react'

class ContactSection extends Component {
  render() {
    return (
      <div className="contact-container">
        <h1 className="my-contact-heading">My Contact</h1>
        <div className="contact-image-container">
          <img
            className="location-img"
            src="https://assets.ccbp.in/frontend/react-js/location-img.png"
            alt="location"
          />
          <div>
            <p className="contact-paragraph">
              If you like my projects and interested to do work with me. Please
              contact
            </p>
            <h1 className="contact-heading">Please Contact</h1>
            <p className="contact-paragraph">9123456789</p>
            <p className="contact-paragraph">sophie.millers@gmail.com</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactSection
