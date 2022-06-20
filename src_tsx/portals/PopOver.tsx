import React from "react"

type Props = {
  info: string
  buttonBoundingRect?: DOMRect
}

export default class PopOver extends React.Component<Props> {
  render() {
    const positionStyle = {
      left: this.props.buttonBoundingRect?.width / 2,
      top: 0,
    }

    return (
      <div
        style={{
          position: "absolute",
          border: "1px solid lightgrey",
          borderRadius: 8,
          marginBottom: 10,
          width: 200,
          background: "white",
          // offset y axis by 100% in order to appear above button
          transform: "translate(-100px, -100%)",
          zIndex: 9999,
          ...positionStyle,
        }}
      >
        <div style={{ padding: 20 }}>{this.props.info}</div>
      </div>
    )
  }
}
