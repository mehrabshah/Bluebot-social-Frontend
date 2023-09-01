import { useState } from 'react'
const OptionSelector = ({ arr }) => {
  const [selectedOption, setSelectedOption] = useState('')
  const handleOptionChange = event => {
    setSelectedOption(event.target.value)
  }
  return (
    <>
      <div className="change-account-container ms-md-5 ms-2 ">
        <p className="change-account mb-0">Click to change your account:</p>
        <div className="select-container">
          <select value={selectedOption} onChange={handleOptionChange} className="custom-select">
            <option value="">Select an option</option>
            {arr.map(ele => (
              <option className="option" key={ele} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}
export default OptionSelector
