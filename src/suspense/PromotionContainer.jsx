import {
  useEffect,
  useRef,
  useState,
  Suspense,
  lazy,
  useTransition,
} from "react"
import LoadingSpinner from "./LoadingSpinner"
import Promotion1 from "./Promotion1"
import ErrorBoundary from "./ErrorBoundary"

const Promotion2 = lazy(() => import("./Promotion2"))
const PromotionContainer = () => {
  const [promotion, setPromotion] = useState(1)
  const timer = useRef()
  useEffect(() => {
    timer.current = setInterval(
      () => setPromotion((current) => (current + 1) % 2),
      5000
    )
    return () => clearInterval(timer.current)
  }, [])
  return (
    <div
      className="card col-4 bg-info text-white p-3"
      style={{ maxHeight: "317px" }}
    >
      <Suspense fallback={<LoadingSpinner />}>
        {promotion === 1 ? <Promotion1 /> : <Promotion2 />}
      </Suspense>
    </div>
  )
}
export default PromotionContainer
