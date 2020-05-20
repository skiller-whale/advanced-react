import React from "react"

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.props.onChange(event.target.value)
  }
  render() {
    return (
      <input
        type={this.props.type}
        className="form-control"
        value={this.props.value}
        onChange={this.handleChange}
      />
    )
  }
}

export default TextInput
