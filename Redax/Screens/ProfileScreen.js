import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Pressable,
} from 'react-native';
import Header from '../customcomponent/Header';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {ADD_PROFILEINFO} from '../Reducers/action/action';

export default function ProfileScreen({navigation, route}) {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [dateofbirth, setdateofbirth] = useState('');
  const [gender, setgender] = useState('Male');
  const [mobileNo, setmobileNo] = useState('');
  const RadioPops = ['Male', 'Female'];
  const [isDateVisible, setDateVisibility] = useState(false);
  const [correct, setcorrect] = useState(false);
  const dispatch = useDispatch();

  const showDatePicker = () => {
    Keyboard.dismiss();
    setDateVisibility(true);
  };

  const hideDatePicker = () => {
    setDateVisibility(false);
  };

  const handleConfirm = date => {
    console.log('Date', date);
    var Date = moment(date).format('DD/MM/YYYY');
    setdateofbirth(Date);
    hideDatePicker();
  };

  const Radio = item => {
    setgender(item);
  };

  const onAdrees = () => {
    if (
      firstName != '' &&
      lastName != '' &&
      dateofbirth != '' &&
      mobileNo != ''
    ) {
      if (mobileNo.length === 10) {
        navigation.navigate('AddressScreen');
        dispatch({
          type: ADD_PROFILEINFO,
          payload: {
            // profile_screen: {
            firstName: firstName,
            lastName: lastName,
            dateofbirth: dateofbirth,
            gender: gender,
            mobileNo: mobileNo,
            // },
          },
        });
      } else {
        setcorrect(true);
      }
    } else if (firstName == '') {
      alert('Enter First Name');
    } else if (lastName == '') {
      alert('Enter Last Name');
    } else if (dateofbirth == '') {
      alert('Enter Date of Birth');
    } else if (mobileNo == '') {
      alert('Enter Mobile No');
    } else if (firstName == '' && lastName == '') {
      alert('Enter First Name & Last Name');
    } else if (lastName == '' && dateofbirth == '') {
      alert('Enter Last Name & Date of Birth');
    } else if (dateofbirth == '' && mobileNo == '') {
      alert('Enter Date of Birth & Mobile No');
    } else if (
      firstName == '' ||
      dateofbirth == '' ||
      lastName == '' ||
      mobileNo == ''
    ) {
      alert('Enter All Details');
    }
  };

  return (
    <View style={{flex: 1}}>
      <Header title="Profile Info" />

      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{flexGrow: 1}}>
        <View>
          <View style={{marginTop: 15}}>
            <Text style={styles.title}>First Name :</Text>
            <TextInput
              style={styles.textinput}
              onChangeText={setfirstName}
              value={firstName}
              placeholder="First Name"
              autoCapitalize="words"
              // onSubmitEditing={Keyboard.dismiss()}
            />
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.title}>Last Name :</Text>
            <TextInput
              style={styles.textinput}
              onChangeText={setlastName}
              value={lastName}
              placeholder="Last Name"
              autoCapitalize="words"
              // onSubmitEditing={Keyboard.dismiss()}
            />
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.title}>Date Of Birth :</Text>
            <Pressable onPress={showDatePicker}>
              <TextInput
                style={styles.textinput}
                onChangeText={setdateofbirth}
                value={dateofbirth}
                placeholder="DD/MM/YYYY"
                editable={false}
                onFocus={data => console.log(data)}
              />
            </Pressable>
          </View>
          <DateTimePickerModal
            isVisible={isDateVisible}
            mode="date"
            display="calendar"
            date={new Date(2002, 12, 12)}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            maximumDate={new Date(2002, 1, 1)}
          />
          <View style={{marginTop: 15}}>
            <Text style={styles.title}>Gender :</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginBottom: 10,
              }}>
              {RadioPops.map((item, index) => {
                return (
                  <View key={index} style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text style={{margin: 10, fontSize: 18}}>{item}</Text>
                      <TouchableOpacity
                        onPress={() => Radio(item)}
                        style={{
                          borderRadius: 100,
                          borderWidth: 2,
                          borderColor: '#23B7FF',
                          height: 25,
                          marginTop: 10,
                          width: 25,
                          justifyContent: 'center',
                        }}>
                        {gender === item && (
                          <View
                            style={{
                              backgroundColor: '#23B7FF',
                              height: 15,
                              width: 15,
                              borderRadius: 100,
                              alignSelf: 'center',
                            }}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={styles.title}>Mobile No :</Text>
            <TextInput
              style={styles.textinput}
              onChangeText={setmobileNo}
              value={mobileNo}
              placeholder="Mobile No"
              keyboardType="numeric"
              maxLength={10}
              returnKeyType="next"
              // onSubmitEditing={Keyboard.dismiss()}
            />
            {correct && (
              <Text style={{color: 'red', marginLeft: 20}}>
                Enter 10 digits Number
              </Text>
            )}
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: 'flex-end',
            marginHorizontal: 20,
          }}>
          <TouchableOpacity
            onPress={onAdrees}
            style={{
              backgroundColor: '#23B7FF',
              width: 100,
              borderRadius: 10,
              elevation: 5,
              marginBottom: 15,
            }}>
            <Text style={{textAlign: 'center', padding: 10, color: 'white'}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginHorizontal: 20,
    marginBottom: 10,
    color: '#23B7FF',
    fontWeight: '900',
  },
  textinput: {
    borderColor: '#23B7FF',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 50,
    paddingHorizontal: 20,
    // height: 40,
    fontSize: 18,
    color: 'black',
    backgroundColor: 'white',
    elevation: 2,
  },
});
