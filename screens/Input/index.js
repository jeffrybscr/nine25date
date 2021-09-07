import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Colors, DateTimePicker, Button } from 'react-native-ui-lib'
import DatePicker from 'react-native-datepicker'
import { AppContext } from '../../store/global'

export const Input = ({ navigation }) => {
  const { dateInput, setDateInput } = useContext(AppContext)

  const onChange = (event, selectedDate) => {
    setDateInput(selectedDate)
  }

  const next = () => {
    navigation.navigate('Output')
  }

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

  return (
    <View marginL-20 marginR-20>
      <DatePicker
        id="date-select-date"
        style={{
          width: '100%',
          position: 'relative',
          textAlign: 'left',
          paddingTop: 20,
          paddingBottom: 20,
        }}
        date={dateInput}
        mode="date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
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
        onDateChange={onChange}
      />
      <Button
        id="button-next"
        onPress={next}
        buttonBold
        borderRadius={10}
        white
        background-blue
        label="Next"
        style={{ width: '100%', paddingVertical: 14 }}
      />
    </View>
  )
}
