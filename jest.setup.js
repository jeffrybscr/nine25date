import { NativeModules, AccessibilityInfo } from 'react-native'
import 'react-native-gesture-handler/jestSetup'

NativeModules.StatusBarManager = {
  setColor: jest.fn(),
  setStyle: jest.fn(),
  setHidden: jest.fn(),
  setNetworkActivityIndicatorVisible: jest.fn(),
  setBackgroundColor: jest.fn(),
  setTranslucent: jest.fn(),
  getHeight: jest.fn(),
}
jest
  .spyOn(AccessibilityInfo, 'isScreenReaderEnabled')
  .mockImplementation(() => new Promise.resolve(false))

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock')
)
jest.mock('react-native-gesture-handler', () => {})
