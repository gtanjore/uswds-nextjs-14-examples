import React from 'react'
import './search2.css';

export default function Search2() {
  return (
    <div className="search2-box">
      <h2>Search 2</h2>
      <form>
        <div className='search2-row'>
          <datalist id="reason-list">
            <option>Select Reason</option>
            <option value="value1">Option A</option>
            <option value="value2">Option B</option>
            <option value="value3">Option C</option>
            <option value="valueBIG">
              Option of extra length to demonstrate how content like
              this will look different
            </option>
          </datalist>
          <label>Select Reason</label>
          <input name="reason" list="reason-list" required x-placeholder='Select Reason'/>
        </div>
        <div className='search2-row'>
          <label>First Name</label>
          <input type="text" name="fname" required x-placeholder='First Name'/>
        </div>
        <div className='search2-row'>
          <label>Last Name</label>
          <input type="text" name="lname" required x-placeholder='Last Name'/>
        </div>
        <div className='search2-row'>
          <label>Date of Birth</label>
          <input type="date" name="dob" required x-placeholder='Date of Birth'/>
        </div>
      </form>
    </div>
  )
}
