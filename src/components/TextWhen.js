import React from 'react'

const TextWhen = ({when}) =>{
  if (when == '0000-00-00') return null

  let newDate = when.split('-')

  let [year, month, day] = newDate

  if (month == "01") month = "January"
  if (month == "02") month = "February"
  if (month == "03") month = "March"
  if (month == "04") month = "April"
  if (month == "05") month = "May"
  if (month == "06") month = "June"
  if (month == "07") month = "July"
  if (month == "08") month = "August"
  if (month == "09") month = "September"
  if (month == "10") month = "October"
  if (month == "11") month = "November"
  if (month == "12") month = "December"

  if (month == "00" && day =="00"){
    return <h5>Met {year}</h5>
  } else if (month == "00" && year =='0000') {
    return <h5>Met (month unknown) {day}</h5>
  } else if (month == "00") {
    return <h5>Met (month unknown) {day},  {year}</h5>
  } else if (day == "00"){
    return <h5>Met {month} {year}</h5>
  } else if (year == "0000"){
    return <h5>Met {month} {day}</h5>
  } else {
    return <h5>Met {month} {day}, {year}</h5>
  }
}

export default TextWhen
