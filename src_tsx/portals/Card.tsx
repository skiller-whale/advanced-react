import React from "react"

import PopOverButton from "./PopOverButton"

const styles = {
  text: {
    color: "white",
    textShadow: "1px 1px #303132",
  },
}

type Props = {
  title: string
  label: string
  text: string
  info: string
  img: string
  infoDisplayed: boolean
  onDisplayInfo: (event: React.SyntheticEvent) => void
}

export default class Card extends React.Component<Props> {
  render() {
    return (
      <div
        style={{
          width: 300,
          margin: 10,
        }}
      >
        <div className="card">
          <div className="card-header">
            <h4>{this.props.title}</h4>
          </div>
          <div
            className="card-body"
            style={{
              background: "#2d3f52",
              // position: "relative",
              // overflow: "hidden",
            }}
          >
            {/* <img
              alt="should be cropped by container overflow:hidden style"
              src={this.props.img}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                width: 300,
              }}
            /> */}
            <div
              style={{
                flex: 1,
                paddingRight: 20,
                paddingBottom: 10,
                position: "relative",
              }}
            >
              <h6 className="card-text" style={styles.text}>
                {this.props.label}
              </h6>
              <p className="card-text" style={styles.text}>
                {this.props.text}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <PopOverButton
                popOverDisplayed={this.props.infoDisplayed}
                label="More Info"
                info={this.props.info}
                onPress={this.props.onDisplayInfo}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
