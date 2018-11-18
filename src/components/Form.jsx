import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue(''),
  }
}

export default ({ onSubmit }) => {
  const { resetValue, ...text } = useInputValue('')
  //Allow ...text to return a value and an onChange
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          onSubmit(text.value)
          resetValue()
        }}
      >
        <TextField
          {...text}
          id="outlined-full-width"
          label="Todo"
          style={{ margin: 8, padding: 15 }}
          placeholder="Enter your TODO Here"
          helperText="Press [Enter] to add your todo"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
      </form>
    </div>
  )
}
