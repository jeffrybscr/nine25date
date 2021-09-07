import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Input } from '../../screens/Input'
import { Output } from '../../screens/Output'

const Stack = createStackNavigator()

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Input"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'black',
          headerStyle: { backgroundColor: 'white' },
        }}
      >
        <Stack.Screen
          name="Input"
          component={Input}
          options={{
            title: 'Select your date',
          }}
        />
        <Stack.Screen
          name="Output"
          component={Output}
          options={{
            title: 'Next Business Day',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
