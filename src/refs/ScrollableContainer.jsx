import { useRef } from "react"

const ScrollableContainer = ({ children }) => {
  const div = useRef()
  const scrollTop = () =>
    div &&
    div.current.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  return (
    <div
      ref={div}
      className="position-relative overflow-auto"
      style={{
        height: "60vh",
      }}
    >
      {children}
    </div>
  )
}
export default ScrollableContainer
