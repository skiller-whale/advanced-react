import React from "react"
import type { ReactNode, PropsWithChildren } from "react"

type Props = PropsWithChildren<{
  fallback?: ReactNode
}>

type State = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
