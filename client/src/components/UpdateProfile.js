import React from 'react'

const TextField = ({ value, onTextChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={event => {
        console.log('Typed..', event.target.value)
        onTextChange(event.target.value)
      }}
    />
  )
}

const EditProfile = ({
  user,
  onChangeFirstName,
  onChangeLastName,
  onChangeImageUrl,
  visible
}) => {
  if (!visible) return null
  else {
    return (
      <div>
        <label>
          First name:{' '}
          <TextField
            value={user.firstName}
            onTextChange={onChangeFirstName} // Short hand for (value) => onChangeFirstName(value)
          />
        </label>
        <br />
        <label>
          Last name:{' '}
          <TextField
            value={user.lastName}
            onTextChange={onChangeLastName} // Short hand for (value) => onChangeLastName(value)
          />
        </label>
        
        <br />
        <label>
          Image URL:{' '}
          <TextField
            value={user.profileImageURL}
            onTextChange={onChangeImageUrl} // Short hand for (value) => onChangeImageUrl(value)
          />
        </label>
      </div>
    )
  }
}

const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

const ShowProfile = ({ user, visible }) => {
  if (!visible) return null
  else {
    return (
      <div>
        <img src={user.profileImageURL} alt="" />
        <h2>{getFullName(user.firstName, user.lastName)}</h2>
      </div>
    )
  }
}

const Button = ({ title, onButtonClick }) => (
    // Short hand for event => onButtonClick()
    <button onClick={onButtonClick}>{title}</button>
  )

export default {TextField, EditProfile, ShowProfile, Button}
