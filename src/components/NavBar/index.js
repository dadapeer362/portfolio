// Write your code here
import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  onClickShowContent = () => {
    const {navBarItem, showContent} = this.props
    const {id, iconUrl, name} = navBarItem
    showContent(id, name)
  }

  render() {
    const {navBarItem} = this.props
    const {id, iconUrl, name, showContent} = navBarItem
    return (
      <li className="list-container" onClick={this.onClickShowContent} id={id}>
        <img className="icon-style" src={iconUrl} alt={name} />
        <p className="name-style">{name}</p>
      </li>
    )
  }
}

export default NavBar
