import services from '../../../services'
import { DateTime } from 'luxon'

const { getNextBusinessDate } = services.dates({
  '2020-12-31': true,
  '2021-02-05': true,
  '2021-02-15': true,
  '2021-02-19': true,
  '2021-02-22': true,
})

describe('Next Business Date function', () => {
  test('Add a simple day', () => {
    const date1 = DateTime.fromISO('2021-01-04')
    const date2 = DateTime.fromISO('2021-01-05')

    expect(getNextBusinessDate(date1.toJSDate())).toEqual(date2.toJSDate())
  })

  test('Add a day on Friday', () => {
    const date1 = DateTime.fromISO('2021-01-01')
    const date2 = DateTime.fromISO('2021-01-04')

    expect(getNextBusinessDate(date1.toJSDate())).toEqual(date2.toJSDate())
  })

  test('Add a day on Saturday', () => {
    const date1 = DateTime.fromISO('2021-01-02')
    const date2 = DateTime.fromISO('2021-01-04')

    expect(getNextBusinessDate(date1.toJSDate())).toEqual(date2.toJSDate())
  })

  test('Add a day on Sunday', () => {
    const date1 = DateTime.fromISO('2021-01-03')
    const date2 = DateTime.fromISO('2021-01-04')

    expect(getNextBusinessDate(date1.toJSDate())).toEqual(date2.toJSDate())
  })

  test('Check same day holiday ', () => {
    const date1 = DateTime.fromISO('2020-12-31')
    const date2 = DateTime.fromISO('2021-01-01')

    expect(getNextBusinessDate(date1.toJSDate())).toEqual(date2.toJSDate())
  })

  test('Check next day holiday ', () => {
    const date1 = DateTime.fromISO('2020-12-30')
    const date2 = DateTime.fromISO('2021-01-01')

    expect(getNextBusinessDate(date1.toJSDate())).toEqual(date2.toJSDate())
  })

  test('Check Friday  holiday ', () => {
    const date1 = DateTime.fromISO('2021-02-04')
    const date2 = DateTime.fromISO('2021-02-08')

    expect(getNextBusinessDate(date1.toJSDate())).toEqual(date2.toJSDate())
  })

  test('Check Monday  holiday ', () => {
    const date1 = DateTime.fromISO('2021-02-12')
    const date2 = DateTime.fromISO('2021-02-16')

    expect(getNextBusinessDate(date1.toJSDate())).toEqual(date2.toJSDate())
  })

  test('Check Friday and Monday  holiday ', () => {
    const date1 = DateTime.fromISO('2021-02-18')
    const date2 = DateTime.fromISO('2021-02-23')

    expect(getNextBusinessDate(date1.toJSDate())).toEqual(date2.toJSDate())
  })

  test('Check JSON file holidays ', () => {
    const date1 = DateTime.fromISO('2021-12-24')
    const date2 = DateTime.fromISO('2021-12-29')

    expect(getNextBusinessDate(date1.toJSDate())).toEqual(date2.toJSDate())
  })
})
