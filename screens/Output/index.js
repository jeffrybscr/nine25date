import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Colors, DateTimePicker, Button } from 'react-native-ui-lib'
import DatePicker from 'react-native-datepicker'
import { AppContext } from '../../store/global'
import services from '../../services'

const { getNextBusinessDate } = services.dates()

export const Output = ({ navigation }) => {
  const { dateInput } = useContext(AppContext)
  const [nextBusinessDate, setNextBusinessDate] = useState(dateInput)

  const style = StyleSheet.create({
    withFrame: {
      borderWidth: 1,
      borderColor: Colors.gray,
      paddingVertical: 14,
      paddingHorizontal: 18,
      borderRadius: 7,
      fontSize: 18,
      fontWeight: '500',
    },
  })

  useEffect(() => {
    setNextBusinessDate(getNextBusinessDate(dateInput))
  }, [])

  return (
    <View marginL-20 marginR-20 id="output-view">
      <DatePicker
        id="new-date"
        disabledColor={Colors.black}
        disabled={true}
        containerStyle={{ marginVertical: 20 }}
        dateFormat={'YYYY-MM-DD'}
        date={nextBusinessDate}
        mode={'date'}
        display="calendar"
        fieldStyle={style.withFrame}
        style={{
          width: '100%',
          position: 'relative',
          textAlign: 'left',
          paddingTop: 20,
          paddingBottom: 20,
        }}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            right: 4,
          },
          dateInput: {
            borderColor: '#787878',
            borderWidth: 1,
            borderRadius: 8,
            height: 50,
          },
        }}
        charCounterStyle={{ color: Colors.black }}
        hideUnderline
        themeVariant="light"
      />
    </View>
  )
}
