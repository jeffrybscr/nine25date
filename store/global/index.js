import React, { useState } from 'react'
import { DateTime } from 'luxon'

export const AppContext = React.createContext({
  dateInput: undefined,
  setDateInput: () => {
    // this is intentional
  },
})

export const useApp = () => {
  const [dateInput, setDateInput] = useState(DateTime.now().toJSDate())
  /* const [dateInput, setDateInput] = useState(
    DateTime.fromISO('2021-12-24').toJSDate()
  ) */

  return {
    dateInput,
    setDateInput,
  }
}
