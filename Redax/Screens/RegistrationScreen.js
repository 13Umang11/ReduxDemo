import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../customcomponent/Header';
import {ADD_REGISTATIONINFO} from '../Reducers/action/action';

export default function RegistrationScreen({navigation, route}) {
  const [nickname, setnickname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [placenickname, setplacenickname] = useState('Nickname');
  const [placeemail, setplaceemail] = useState('E-mail Address');
  const [placepassword, setplacepassword] = useState('Password');
  const [placeconfirmpassword, setplaceconfirmpassword] =
    useState('Confirm Password');
  const [color, setcolor] = useState(null);

  const dispatch = useDispatch();

  let registation_Info = {};

  useSelector(data => {
    console.log(data.MainReducer.registation_Info);
    registation_Info = data.MainReducer.registation_Info;

    return data;
  });

  useEffect(() => {
    if (registation_Info) {
      setnickname(registation_Info.nickname);
      setpassword(registation_Info.password);
      setemail(registation_Info.email);
      setconfirmpassword(registation_Info.confirmpassword);
    }
  }, [registation_Info]);

  const onRegister = () => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (
      nickname != '' &&
      email != '' &&
      password != '' &&
      confirmpassword != ''
    ) {
      if (email.match(validRegex)) {
        if (password.length > 5 && confirmpassword.length > 5) {
          if (password === confirmpassword) {
            navigation.navigate('UserDetail');
            dispatch({
              type: ADD_REGISTATIONINFO,
              payload: {
                // registration_screen: {
                nickname: nickname,
                email: email,
                password: password,
                confirmpassword: confirmpassword,
                // },
              },
            });
          } else {
            alert('Password Not Match');
          }
        } else {
          alert('Enter Password must be 6 or more character');
        }
      } else {
        alert('Enter Valid Email Address');
      }
    } else if (nickname == '') {
      setplacenickname('Enter Nick Name');
      setcolor('red');
    } else if (email == '') {
      setplacenickname('Enter Email Address');
      setcolor('red');
    } else if (password == '') {
      setplacenickname('Enter PassWord');
      setcolor('red');
    } else if (confirmpassword == '') {
      setplacenickname('Enter Confirm Password');
      setcolor('red');
    } else if (
      nickname == '' ||
      email == '' ||
      password == '' ||
      confirmpassword == ''
    ) {
      alert('Enter All Details');
    }
  };

  return (
    <View style={{flex: 1}}>
      <Header title="Registration" />
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{marginTop: 10}}>
          <Text style={styles.title}>Nickname</Text>
          <TextInput
            style={styles.textinput}
            onChangeText={setnickname}
            value={nickname}
            placeholder={placenickname}
            placeholderTextColor={color}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.title}>E-mail Address</Text>
          <TextInput
            style={styles.textinput}
            onChangeText={setemail}
            keyboardType="email-address"
            value={email}
            placeholder={placeemail}
            placeholderTextColor={color}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.title}>Password</Text>
          <TextInput
            style={styles.textinput}
            onChangeText={setpassword}
            value={password}
            secureTextEntry={true}
            placeholder={placepassword}
            placeholderTextColor={color}
          />
        </View>
        <View style={{marginBottom: 10, marginTop: 10}}>
          <Text style={styles.title}>Confirm Password</Text>
          <TextInput
            style={styles.textinput}
            onChangeText={setconfirmpassword}
            value={confirmpassword}
            placeholder={placeconfirmpassword}
            placeholderTextColor={color}
            secureTextEntry={true}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
          }}>
          <View
            style={{
              borderWidth: 2,
              borderRadius: 13,
              // elevation: 1,
              justifyContent: 'center',
              borderColor: 'blue',
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 100,
                borderRadius: 10,
                borderWidth: 5,
                borderColor: '#22B7FF',
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center', color: '#22B7FF', padding: 8}}>
                Previeus
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={onRegister}
            style={{
              backgroundColor: '#22B7FF',
              width: 100,
              marginTop: 5,
              borderRadius: 10,
              elevation: 3,
            }}>
            <Text style={{textAlign: 'center', padding: 12, color: 'white'}}>
              Finish
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View
          style={{
            flex: 1,
            alignSelf: 'flex-end',
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={onRegister}
            style={{
              backgroundColor: '#22B7FF',
              width: 100,
              marginBottom: 20,
              borderRadius: 10,
              elevation: 5,
            }}>
            <Text style={{textAlign: 'center', padding: 10, color: 'white'}}>
              Finish
            </Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginHorizontal: 20,
    marginBottom: 10,
    color: '#22B7FF',
    fontWeight: '900',
  },
  textinput: {
    borderColor: '#22B7FF',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 50,
    paddingHorizontal: 20,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    elevation: 3,
  },
});
