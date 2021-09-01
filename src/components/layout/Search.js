import React from 'react'

export default class Search extends React.Component {
  state = {
    text: '',
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.searchUsers(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div className="container w-50 m-auto widhtMedia">
        <form onSubmit={this.onSubmit}>
          <label className="form-label serachLabel">Search Github Users</label>
          <input
            type="text"
            name="text"
            value={this.state.text}
            className="form-control"
            placeholder="Serach Github User"
            onChange={this.onChange}
          />
          <button className="btn btn-primary w-100 text-white mt-3">
            Search
          </button>
          {this.props.showClear && (
            <button
              className="btn btn-danger w-100 mt-3"
              onClick={this.props.clearUsers}
            >
              Clear
            </button>
          )}
        </form>
      </div>
    )
  }
}
