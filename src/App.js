import React from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from 'axios'
import Search from './components/layout/Search'
import Alert from './components/layout/Alert'

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  }

  // async componentDidMount() {
  //   this.setState({ loading: true })
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
  //   )
  //   console.log(res.data)
  //   this.setState({ users: res.data, loading: false })
  // }

  searchUsers = async (text) => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    )

    this.setState({ users: res.data.items, loading: false })
  }

  // clear Users form DOM
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
    })
  }

  // alert

  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg: msg,
        type: type,
      },
    })

    setTimeout(() => this.setState({ alert: null }), 5000)
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Alert alert={this.state.alert} />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={this.state.users.length > 0 ? true : false}
          setAlert={this.setAlert}
        />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    )
  }
}

export default App
