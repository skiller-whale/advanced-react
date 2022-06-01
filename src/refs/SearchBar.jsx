import { useState } from "react"
import TextInput from "./TextInput"
const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [search, setSearch] = useState("")
  const onShowSearch = () => {
    setShowSearch(true)
  }
  const onCancelSearch = () => {
    setShowSearch(false)
    setSearch("")
  }
  const handleChange = (text) => {
    setSearch(text)
  }
  return (
    <>
      {showSearch ? (
        <div className="form-inline my-2 my-lg-0">
          <TextInput
            placeholder="Search"
            value={search}
            onChange={handleChange}
          />
          <button className="btn btn-outline-success my-2 my-sm-0">Find</button>
          <button
            className="btn btn-outline my-2 my-sm-0"
            onClick={onCancelSearch}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="form-inline my-2 my-lg-0">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={onShowSearch}
          >
            Search
          </button>
        </div>
      )}
    </>
  )
}
export default SearchBar
