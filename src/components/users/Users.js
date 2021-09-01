import React from 'react'
import UserItems from './UserItems'
import Spinner from '../layout/Spinner'

const Users = ({ loading, users }) => {
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: '60vh' }}
      >
        <Spinner />
      </div>
    )
  } else {
    return (
      <div className="grid">
        {users.map((user) => {
          return <UserItems key={user.id} user={user} />
        })}
      </div>
    )
  }
}

export default Users
