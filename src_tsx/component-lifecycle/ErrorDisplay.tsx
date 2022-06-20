export default function ErrorDisplay() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h4>Oops something went wrong - sorry!</h4>
      <button
        onClick={() => window.location.reload()}
        type="button"
        className="btn btn-primary mt-4"
      >
        Refresh page
      </button>
    </div>
  )
}
