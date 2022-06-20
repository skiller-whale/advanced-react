import type { FC, ChangeEvent } from "react"

type Props = {
  onChange: (string: string) => any
  value: string
  placeholder: string
}

const TextInput: FC<Props> = ({ onChange, value, placeholder }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <input
      className="form-control mr-sm-2"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  )
}

export default TextInput
