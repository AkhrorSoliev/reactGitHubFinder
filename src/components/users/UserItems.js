import React, { Component } from 'react'

class UserItems extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user

    return (
      <div className="card p-3">
        <img
          src={avatar_url}
          alt="avatarImage"
          style={{ width: '60px', borderRadius: '50%' }}
          className="text-center"
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark m-1 ">
            More
          </a>
        </div>
      </div>
    )
  }
}

export default UserItems
