import React from 'react'

const SearchInputList = (props) => {
  return (
    <table style={{display: "flex",flexDirection: 'column', alignItems: "center"}}>
      <tr>
        <th>
          {props.children}
        </th>
      </tr>
      <tr>
        <td>kek</td>
      </tr>
    </table>
  )
}

export default SearchInputList