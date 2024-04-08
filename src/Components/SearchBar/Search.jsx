import React from 'react'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Search() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  return (


    <>

      <div className="absolute z-0 pb-[6rem] mx-2 my-8 text-lg border border-gray-100 shadow-xl">

        <label htmlFor="latitude">Latitude:  &nbsp;
          <input type="text" placeholder='Enter Latitude' className='mb-8 border rounded-lg border-gray-200' />
        </label>
        <br />
        <label htmlFor="longitude">Longitude: &nbsp;

          <input type="text" placeholder='Enter Longitude' className='mb-8 border rounded-lg border-gray-200' />
        </label>



        <div className='flex flex-row gap-4'>
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


        <button className='rounded-xl bg-green-500 px-4 text-white py-2 my-4'>
            Submit
        </button>
      </div>
    </>
  )
}

export default Search
