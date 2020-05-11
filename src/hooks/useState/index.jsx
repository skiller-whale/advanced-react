import React from "react"

function LikeButton() {
  return (
    <button type="button" className="btn btn-primary">
      Like
    </button>
  )
}

class NewsItem extends React.Component {
  constructor(props) {
    super()
    this.state = {
      headline: props.initialHeadline,
      tag: null
    }
    this.onHeadlineInputChange = this.onHeadlineInputChange.bind(this)
    this.onTagSelectChange = this.onTagSelectChange.bind(this)
  }

  onHeadlineInputChange(event) {
    this.setState({ headline: event.target.value })
  }

  onTagSelectChange(event) {
    this.setState({ tag: event.target.value })
  }

  render() {
    const tagOptions = ["", "World", "Finance", "Sport", "Gossip"]
    return (
      <div className="media">
        <img
          alt="64x64"
          className="mr-3"
          data-src="holder.js/64x64"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNzE1NTBhNzU4MyB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE3MTU1MGE3NTgzIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40NjA5Mzc1IiB5PSIzNi41Ij42NHg2NDwvdGV4dD48L2c+PC9nPjwvc3ZnPg=="
          style={{
            width: 64,
            height: 64,
          }}
        ></img>
        <div className="media-body column p-3">
          <h4>{this.state.headline}  <span className="badge badge-info">{this.state.tag}</span></h4>
          <div className="mb-2">{this.props.content}</div>
          <div>
            <LikeButton />
          </div>
        </div>
        <div className="card column col-auto p-3">
          <div className="form-group">
            <input className="form-input" placeholder="Edit Headline" onChange={this.onHeadlineInputChange}/>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor='tag-select'>Select Tag</label>
            <select className="form-select ml-2" id='tag-select' onChange={this.onTagSelectChange}>
              {tagOptions.map(value => <option key={value}>{value}</option>)}
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>News</h1>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <NewsItem
            initialHeadline="News headline"
            content={`Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.`}
          />
        </div>
      </div>
    </div>
  )
}
