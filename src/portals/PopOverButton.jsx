import React from "react"
import PopOver from "./PopOver"

export default class InfoButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonBoundingRect: {},
    }
    this.onClickButton = this.onClickButton.bind(this)
  }
  onClickButton(e) {
    const buttonBoundingRect = e.target.getBoundingClientRect()
    this.setState({ buttonBoundingRect })
    this.props.onPress(e)
  }
  render() {
    return (
      <div style={{ position: "relative" }}>
        <button
          className="btn btn-primary"
          onClick={this.onClickButton}
          ref={this.buttonRef}
        >
          {this.props.label}
        </button>
        {this.props.popOverDisplayed && (
          <PopOver
            info={this.props.info}
            buttonBoundingRect={this.state.buttonBoundingRect}
          />
        )}
      </div>
    )
  }
}
