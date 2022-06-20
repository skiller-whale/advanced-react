import React from "react"

import analytics from "../_utils/analytics"
import ErrorDisplay from "./ErrorDisplay"

type Props = {
  content: () => React.ReactElement
}

class Tab extends React.Component<Props> {
  render() {
    return <div>{this.props.content()}</div>
  }
}

export default Tab
