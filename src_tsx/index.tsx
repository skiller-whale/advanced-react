import { createRoot } from "react-dom/client"

import App from "./App"
// import App from "./hooks/useState"
// import App from "./hooks/useEffect"
// import App from "./refs"
// import App from "./component-lifecycle"
// import App from "./testing/drive-safe-app"
// import App from "./portals"
// import App from "./suspense"

const container = document.getElementById("root")!

const root = createRoot(container)
root.render(<App />)
