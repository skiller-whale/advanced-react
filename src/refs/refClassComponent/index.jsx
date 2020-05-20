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
        className="form-control mr-sm-2"
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.handleChange}
      />
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showSearch: false,
      location: "London",
    }
    this.onShowSearch = this.onShowSearch.bind(this)
    this.onCancelSearch = this.onCancelSearch.bind(this)
  }

  onShowSearch() {
    this.setState({ showSearch: true })
  }

  onCancelSearch() {
    this.setState({ showSearch: false, location: "London" })
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Best Holidays
        </a>
        <div>
          {this.state.showSearch && (
            <div className="form-inline my-2 my-lg-0">
              <TextInput
                placeholder="Search"
                value={this.state.location}
                onChange={(text) => this.setState({ location: text })}
              />
              <button className="btn btn-outline-success my-2 my-sm-0">
                Find
              </button>
              <button
                className="btn btn-outline my-2 my-sm-0"
                onClick={this.onCancelSearch}
              >
                Cancel
              </button>
            </div>
          )}
          {!this.state.showSearch && (
            <div className="form-inline my-2 my-lg-0">
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={this.onShowSearch}
              >
                Search
              </button>
            </div>
          )}
        </div>
      </nav>
    )
  }
}

export default App
