import React, { Component } from 'react'

class Navbar extends Component {
  static defaultProps = {
    title: 'ReactGitHubFinder',
    logo: 'fab fa-github',
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <i className={this.props.logo}></i> {this.props.title}
            </a>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
