import { forwardRef, useImperativeHandle, useRef } from "react"
import type { FC, PropsWithChildren } from "react"

export type Ref = {
  scrollTop: () => void
}

const ScrollableContainer: FC<PropsWithChildren<{}>> = ({ children }) => {
  const divRef = useRef<HTMLDivElement>(null)

  const scrollTop = () => {
    if (divRef.current) {
      divRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }
  return (
    <div
      ref={divRef}
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
