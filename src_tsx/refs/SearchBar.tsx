import { useState } from "react"
import type { FC } from "react"
import TextInput from "./TextInput"

const SearchBar: FC = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [search, setSearch] = useState<string>("")

  const onShowSearch: () => void = () => {
    setShowSearch(true)
  }

  const onCancelSearch: () => void = () => {
    setShowSearch(false)
    setSearch("")
  }

  const handleChange = (text: string) => {
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
