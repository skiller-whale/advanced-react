const ScrollableContainer = ({ children }) => {
  const scrollTop = (element) =>
    element.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  return (
    <div
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
