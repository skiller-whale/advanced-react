import { useEffect, useRef } from "react"

const TextInput = ({ onChange, value, placeholder }) => {
  const handleChange = (event) => {
    onChange(event.target.value)
  }
  return (
    <input
      className="form-control mr-sm-2"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  )
}
export default TextInput
