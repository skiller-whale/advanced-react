import React from "react"
import analytics from "../_utils/analytics"
import ErrorDisplay from "./ErrorDisplay"

class Tab extends React.Component {
  render() {
    return <div>{this.props.content()}</div>
  }
}
export default Tab
