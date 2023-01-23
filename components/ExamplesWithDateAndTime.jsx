import {Phormal} from "@phormal/core";
import {useEffect} from "react";

const BasicDemo = () => {

  useEffect(() => {
    if (typeof window === 'undefined' || window.location === 'undefined') return;

    let theme = 'basic'
    if (window.location.href.includes('theme=material')) theme = 'material'

    const form = new Phormal({
      date: {
        label: 'Date input',
        type: 'date',
      },
      dateWithMinMax: {
        label: 'Date input with min and max',
        type: 'date',
        min: '2023-01-01',
        max: '2023-12-31',
        row: 'row-1'
      },
      time: {
        label: 'Time input',
        type: 'time',
        min: '09:00',
        max: '18:00',
        row: 'row-1'
      },
      dateTimeLocal: {
        label: 'Date and time input',
        type: 'datetime-local',
      },
    }, {
      el: '#phormal-date-and-time',
      theme,
    })
  }, [])

  return <>
    <br />
    <div id="phormal-date-and-time"></div>
  </>
}

export default BasicDemo