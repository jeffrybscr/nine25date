import 'react-native'
import React from 'react'
import { DateTime } from 'luxon'
import { Input } from '../../screens/Input'
import { AppContext } from '../../store/global'
import renderer from 'react-test-renderer'

describe('--- Messaging Component ---', () => {
  it('renders correctly', () => {
    const data = {
      dateInput: DateTime.now().toJSDate(),
    }

    let tree
    renderer.act(() => {
      tree = renderer.create(
        <AppContext.Provider value={data}>
          <Input />
        </AppContext.Provider>
      )
    })

    expect(
      tree.root.findByProps({ id: 'date-select-date' }).props
    ).toBeDefined()

    const dt = DateTime.fromJSDate(
      tree.root.findByProps({ id: 'date-select-date' }).props.date
    )

    expect(dt.toISODate()).toEqual(DateTime.now().toISODate())
  })

  it('click next', () => {
    const data = {
      dateInput: DateTime.now().toJSDate(),
    }

    const mockNavigation = { navigate: jest.fn(() => {}) }

    let tree
    renderer.act(() => {
      tree = renderer.create(
        <AppContext.Provider value={data}>
          <Input navigation={mockNavigation} />
        </AppContext.Provider>
      )
    })

    expect(tree.root.findByProps({ id: 'button-next' }).props).toBeDefined()

    renderer.act(() => {
      tree.root.findByProps({ id: 'button-next' }).props.onPress()
    })

    expect(mockNavigation.navigate).toBeCalled()
    expect(mockNavigation.navigate).toBeCalledTimes(1)
  })
})
