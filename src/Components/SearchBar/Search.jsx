import React from 'react'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Search() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  return (


    <>

      <div className="absolute z-0 pb-[6rem] mx-2">

        <label htmlFor="latitude">Latitude:  &nbsp;
          <input type="text" placeholder='Enter Latitude' className='mb-8 border rounded-lg border-gray-200' />
        </label>
        <br />
        <label htmlFor="longitude">Longitude: &nbsp;

          <input type="text" placeholder='Enter Longitude' className='mb-8 border rounded-lg border-gray-200' />
        </label>



        <div>
          <label htmlFor="from">From: &nbsp;</label>
          <DatePicker
            selected={startDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            onChange={date => setStartDate(date)}
            className='border border-none shadow-lg'
          />
          <label htmlFor="to">To: &nbsp;</label>
          <DatePicker
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            onChange={date => setEndDate(date)}
            className="shadow-lg"
          />
        </div>
      </div>
    </>
  )
}

export default Search
