import React, { useState } from 'react';
import './index.css';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

export function UsersApp() {
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [searchValue, setSearchValue] = useState("")
  const [invites, setInvites] = useState([])
  const [success, setSucces] = useState(false)
  
  fetch("https://reqres.in/api/users")
  .then(resp => resp.json())
  .then(json => {
    setUsers(json.data)
  }).catch(err => {
    console.warn(err);
  }).finally(() => setLoading(false))

  const onChangeInputValue = (event) => {
    setSearchValue(event.target.value)
  }

  const onCLickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    } else {
      setInvites((prev) => [...prev, id])
    }
  }

  const onClickSendInvites = () => {
    setSucces(true)
  }
  const onClickBack = () => {
    setSucces(false)
  }

  return (
    <div className="Users">
      {
        success
        ? <Success onClickBack={onClickBack} count={invites.length}/>
        : <Users 
        onChangeInputValue={onChangeInputValue}
         searchValue={searchValue}
          items={users} 
          isLoading={isLoading}
          invites={invites}
          onCLickInvite={onCLickInvite}
          onClickSendInvites={onClickSendInvites}
          onClickBack={onClickBack}
          />
      }
    </div>
  );
}

