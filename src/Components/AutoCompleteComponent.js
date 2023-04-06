import React from 'react'
import { AutoComplete } from 'antd';


const AutoCompleteComponent = ({ options, placeHolder}) => {

  return (
    <AutoComplete
    style={{
      width: 200,
    }}
    options={options}
    placeholder={placeHolder}
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
  )
}

export default AutoCompleteComponent