import MutationObserver from "@sheerun/mutationobserver-shim"

// add shim for MutationObserver while we are on older version of js-dom/jest
window.MutationObserver = MutationObserver
