import { FC } from "react"

const Promotion1: FC = () => (
  <div className="d-flex flex-column h-100 w-100">
    <div>SQL: Ess-queue-ell or sequel?</div>
    <div className="mb-auto mt-auto d-flex flex-column justify-content-around flex-grow-1">
      <div className="progress h-25">
        <div className="progress-bar bg-danger w-50" role="progressbar">
          Ess-queue-ell
        </div>
      </div>
      <div className="progress h-25">
        <div className="progress-bar bg-danger w-75" role="progressbar">
          sequel
        </div>
      </div>
    </div>
    <button className="btn btn-success">Vote Now!</button>
  </div>
)

export default Promotion1
