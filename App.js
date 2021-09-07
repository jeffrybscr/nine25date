import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppContext, useApp } from './store/global'
import { MainNavigator } from './navigators/MainNavigator'

const App = () => {
  const appStore = useApp()

  const backgroundStyle = {
    backgroundColor: Colors.white,
    flex: 1,
  }

  return (
    <SafeAreaProvider>
      <AppContext.Provider value={appStore}>
        <SafeAreaView style={backgroundStyle}>
          <MainNavigator />
        </SafeAreaView>
      </AppContext.Provider>
    </SafeAreaProvider>
  )
}

export default App
