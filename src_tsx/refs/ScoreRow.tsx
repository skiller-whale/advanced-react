import { forwardRef, useRef } from "react"
import type { FC } from "react"

type Props = {
  position: number
  name: string
  score: number
}

const ScoreRow: FC<Props> = ({ position, name, score }) => {
  return (
    <tr>
      <th scope="row">{position}</th>
      <td>{name}</td>
      <td>{score}</td>
      <td>
        <span className="text-success">⇑</span>
        <span className="text-danger">⇓</span>
        <span className="text-warning">=</span>
      </td>
    </tr>
  )
}

export default ScoreRow
