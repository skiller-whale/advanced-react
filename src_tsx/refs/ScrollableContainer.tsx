import { useRef } from "react"
import type { FC, PropsWithChildren } from "react"

export type Ref = {
  scrollTop: () => void
}

const ScrollableContainer: FC<PropsWithChildren<{}>> = ({ children }) => {
  const div = useRef<HTMLDivElement>()

  const scrollTop = () =>
    div && div.current.scrollTo({
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
