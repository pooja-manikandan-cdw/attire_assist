import React from 'react'

const Dropdown = (props) => {
    const {value, setValue} = props;
  return (
    <select value={value} onChange={setValue}>
        <option value="cm">cm</option>
        <option value="meter">Meter</option>
        <option value="inch">Inch</option>
    </select>
  )
}

export default Dropdown