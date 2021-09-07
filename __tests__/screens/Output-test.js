import 'react-native'
import React from 'react'
import { DateTime } from 'luxon'
import { Output } from '../../screens/Output'
import { AppContext } from '../../store/global'
import renderer from 'react-test-renderer'

describe('--- Messaging Component ---', () => {
  it('renders correctly', () => {
    const data = {
      dateInput: DateTime.fromISO('2021-12-24').toJSDate(),
    }

    let tree
    renderer.act(() => {
      tree = renderer.create(
        <AppContext.Provider value={data}>
          <Output />
        </AppContext.Provider>
      )
    })

    expect(tree.root.findByProps({ id: 'new-date' }).props).toBeDefined()

    const dt = DateTime.fromJSDate(
      tree.root.findByProps({ id: 'new-date' }).props.date
    )

    expect(dt.toISODate()).toEqual(DateTime.fromISO('2021-12-29').toISODate())
  })
})
