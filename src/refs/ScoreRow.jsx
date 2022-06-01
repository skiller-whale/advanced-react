const ScoreRow = ({ position, name, score }) => {
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
