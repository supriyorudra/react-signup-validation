import React from 'react'

const MyInput = (props) => {
  return (
    <div className="form-control">
            <input type={props.myType}
            placeholder={props.myPlace}
            value={props.myValue}
            onChange={props.change} />
    </div>
  )
}

export default MyInput