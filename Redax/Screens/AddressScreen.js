import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, StyleSheet, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../customcomponent/Header';
import CTDropDown from '../customcomponent/CTDropDown';
import {ADD_ADDRESSINFO} from '../Reducers/action/action';
import {useDispatch, useSelector} from 'react-redux';

export default function AddressScreen({navigation, route}) {
  const [house, sethouse] = useState('');
  const [landmark, setlandmark] = useState('');
  const [area, setarea] = useState('');
  const [city, setcity] = useState('Surat');
  const [pincode, setpincode] = useState('');

  const dispatch = useDispatch();

  let address_Info = {};

  useSelector(data => {
    console.log(data.MainReducer.address_Info);
    address_Info = data.MainReducer.address_Info;

    return data;
  });

  useEffect(() => {
    if (address_Info) {
      sethouse(address_Info.house);
      setarea(address_Info.area);
      setcity(address_Info.city);
      setlandmark(address_Info.landmark);
      setpincode(address_Info.pincode);
    }
  }, [address_Info]);

  const [opencity, setopencity] = useState(false);
  const [cityvalue, setcityvalue] = useState('Surat');
  const [cityoptions, setcityoptions] = useState([
    {label: 'Surat', value: 'Surat'},
    {label: 'Valsad', value: 'Valsad'},
    {label: 'Ahmedabad', value: 'Ahmedabad'},
    {label: 'Jamnagar', value: 'Jamnagar'},
    {label: 'Patan', value: 'Patan'},
  ]);

  const onQualification = () => {
    if (
      house != '' &&
      landmark != '' &&
      area != '' &&
      city != '' &&
      pincode != ''
    ) {
      navigation.navigate('QualificationScreen');
      // {
      //   addressdata: {
      //     house: house,
      //     landmark: landmark,
      //     area: area,
      //     city: city,
      //     pincode: pincode,
      //   },
      //   profiledata: route.params.profiledata,
      // });
      dispatch({
        type: ADD_ADDRESSINFO,
        payload: {
          // address_screen: {
          house: house,
          landmark: landmark,
          area: area,
          city: city,
          pincode: pincode,
          // },
        },
      });
    } else if (house == '') {
      alert('Enter House No');
    } else if (landmark == '') {
      alert('Enter LandMark');
    } else if (area == '') {
      alert('Enter Area');
    } else if (city == '') {
      alert('Enter City');
    } else if (pincode == '') {
      alert('Enter PinCode');
    } else {
      alert('Enter All Details');
    }
  };

  return (
    <View style={{flex: 1}}>
      <Header title="Address" />
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{marginTop: 10}}>
          <Text style={styles.title}>House No.</Text>
          <TextInput
            style={styles.textinput}
            onChangeText={sethouse}
            value={house}
            placeholder="House No"
            keyboardType="numeric"
            maxLength={4}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.title}>Landmark</Text>
          <TextInput
            style={styles.textinput}
            onChangeText={setlandmark}
            value={landmark}
            placeholder="Landmark"
          />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.title}>Area</Text>
          <TextInput
            style={styles.textinput}
            onChangeText={setarea}
            value={area}
            placeholder="Area"
          />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.title}>City : </Text>
          <CTDropDown
            itemKey={'value'}
            onOpen={opencity}
            onValue={cityvalue}
            onChangeValue={text => setcity(text)}
            onItems={cityoptions}
            setOpen={setopencity}
            setValue={setcityvalue}
            setItems={setcityoptions}
          />
        </View>
        <View style={{marginBottom: 10, marginTop: 10}}>
          <Text style={styles.title}>Pincode :</Text>
          <TextInput
            style={styles.textinput}
            onChangeText={setpincode}
            value={pincode}
            placeholder="Pincode"
            keyboardType="numeric"
            maxLength={6}
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
            onPress={onQualification}
            style={{
              backgroundColor: '#22B7FF',
              width: 100,
              marginTop: 5,
              borderRadius: 10,
              elevation: 3,
            }}>
            <Text style={{textAlign: 'center', padding: 12, color: 'white'}}>
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
    color: '#22B7FF',
    fontWeight: '900',
  },
  textinput: {
    borderColor: '#22B7FF',
    borderWidth: 1,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 20,
    elevation: 3,
    fontSize: 17,
    color: 'black',
  },
});
