import React, {useState} from 'react'

function AddNum({onClick}) {
  const [size, setSize] = useState(0)

  return (
    <div>
      <p>AddNum</p>
      <input type="button" value="+" onClick={() => {
        onClick(size)
      }}/>
      <input type="input" value={size}
             onChange={(e) => {
               setSize(Number(e.target.value))
             }}/>
    </div>
  )
}

export default AddNum
