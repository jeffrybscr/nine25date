import { DateTime } from 'luxon'
import holidays from './holidays.json'

export default (additionalHolidays = {}) => {
  const holidays = require('./holidays.json')
  const mapHolidays = { ...holidays, ...additionalHolidays }

  const checkIsHoliday = (date) => {
    return mapHolidays[date.toISODate()] ? true : false
  }

  const nextDate = (date) => {
    const nd = date.plus({ days: 1 })

    if (date.weekday == 5) {
      return nextDate(date.plus({ days: 2 }))
    } else if (date.weekday == 6) {
      return nextDate(date.plus({ days: 1 }))
    } else if (checkIsHoliday(nd)) {
      return nextDate(nd)
    }

    return nd
  }

  const getNextBusinessDate = (date) => {
    const dt = DateTime.fromJSDate(date)
    return nextDate(dt).toJSDate()
  }

  return {
    getNextBusinessDate,
  }
}
