import React from "react"

import TextInput from "./TextInput"

class SignInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onClear = this.onClear.bind(this)
  }
  onClear() {
    this.setState({
      username: "",
      password: "",
    })
  }
  onSubmit() {
    console.log("* would submit *", this.state)
  }
  render() {
    return (
      <div style={{ padding: 10, maxWidth: 300 }}>
        <div className="form-group">
          <label>Username</label>
          <TextInput
            type="text"
            value={this.state.username}
            onChange={(text) => this.setState({ username: text })}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <TextInput
            type="password"
            value={this.state.password}
            onChange={(text) => this.setState({ password: text })}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onSubmit}
        >
          Submit
        </button>
        <button
          type="submit"
          className="btn btn-secondary ml-2"
          onClick={this.onClear}
        >
          Clear
        </button>
      </div>
    )
  }
}

export default SignInForm
