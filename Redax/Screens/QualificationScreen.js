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
import Header from '../customcomponent/Header';
import {tick} from '../assets/index';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_QUALIFICATIONINFO} from '../Reducers/action/action';

export default function QualificationScreen({navigation, route}) {
  const [school10th, setschool10th] = useState('');
  const [school12th, setschool12th] = useState('');
  const [collage, setcollage] = useState('');
  const [percentage, setpercentage] = useState('');
  const [check10, setcheck10] = useState(false);
  const [check12, setcheck12] = useState(false);
  const [checkC, setcheckC] = useState(false);

  const dispatch = useDispatch();
  let qualification_Info = {};

  useSelector(data => {
    qualification_Info = data.MainReducer.qualification_Info;
  });

  useEffect(() => {
    if (qualification_Info) {
      setschool10th(qualification_Info.school10th);
      setschool12th(qualification_Info.school12th);
      setcollage(qualification_Info.collage);
      setpercentage(qualification_Info.percentage);
      setcheck10(qualification_Info.check10);
      setcheck12(qualification_Info.check12);
      setcheckC(qualification_Info.checkC);
    }
  }, [qualification_Info]);

  const Check10 = () => {
    setcheck10(!check10);
  };
  const Check12 = () => {
    setcheck12(!check12);
    if (!check12) {
      setcheck10(true);
    }
  };
  const CheckC = () => {
    setcheckC(!checkC);
    if (!checkC) {
      setcheck10(true);
    }
  };

  const Registration_Screen = () => {
    navigation.navigate('RegistrationScreen');
    dispatch({
      type: ADD_QUALIFICATIONINFO,
      payload: {
        school10th: school10th,
        school12th: school12th,
        collage: collage,
        percentage: percentage,
        check10: check10,
        check12: check12,
        checkC: checkC,
      },
    });
  };

  const onRegistration = () => {
    if (check10) {
      if (school10th) {
        if (check12) {
          if (school12th) {
            if (percentage != '') {
              if (checkC) {
                if (collage) {
                  Registration_Screen();
                } else {
                  alert('Enter Your Collage Name');
                }
              } else {
                Registration_Screen();
              }
            } else {
              alert('Enter 12th Percentage');
            }
          } else {
            alert('Enter 12th School Name');
          }
        } else if (checkC) {
          if (collage) {
            // Registration_Screen();
          } else {
            alert('Enter Your Collage Name');
          }
        } else {
          Registration_Screen();
        }
      } else {
        alert('Enter 10th School Name');
      }
    } else {
      Registration_Screen();
    }
  };

  return (
    <View style={{flex: 1}}>
      <Header title="Qualification" />
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{marginTop: 10}}>
          <Text style={styles.title}>Education Qualification</Text>
          <View style={[styles.detail, {padding: 0}]}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={Check10}
                activeOpacity={0.5}>
                <View
                  style={{
                    ...styles.cheackbox,
                    borderColor: check10 ? '#008577' : 'black',
                    backgroundColor: check10 ? 'green' : 'white',
                  }}>
                  {check10 ? (
                    <Image source={tick} style={styles.checkimage} />
                  ) : (
                    <View />
                  )}
                </View>
                <Text
                  style={[
                    styles.subtext,
                    {marginVertical: 5, fontSize: 16, marginHorizontal: 15},
                  ]}>
                  10th Pass
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={Check12}
                activeOpacity={0.5}>
                <View
                  style={{
                    ...styles.cheackbox,
                    borderColor: check12 ? '#008577' : 'black',
                    backgroundColor: check12 ? 'green' : 'white',
                  }}>
                  {check12 ? (
                    <Image source={tick} style={styles.checkimage} />
                  ) : (
                    <View />
                  )}
                </View>

                <Text
                  style={[
                    styles.subtext,
                    {
                      marginVertical: 5,
                      fontSize: 16,
                      marginHorizontal: 15,
                    },
                  ]}>
                  12th Pass
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={CheckC}
                activeOpacity={0.5}>
                <View
                  style={{
                    ...styles.cheackbox,
                    borderColor: checkC ? '#008577' : 'black',
                    backgroundColor: checkC ? 'green' : 'white',
                  }}>
                  {checkC ? (
                    <Image source={tick} style={styles.checkimage} />
                  ) : (
                    <View />
                  )}
                </View>
                <Text
                  style={[
                    styles.subtext,
                    {marginVertical: 5, fontSize: 16, marginHorizontal: 15},
                  ]}>
                  Collage Complete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={styles.title}>Name of School(10th Complete)</Text>
          <TextInput
            style={styles.textinput}
            editable={check10}
            onChangeText={setschool10th}
            value={school10th}
            placeholder="Name of School(10th Complete)"
          />
        </View>

        {check12 && (
          <View>
            <View style={{marginTop: 10}}>
              <Text style={styles.title}>Name of School(12th Complete)</Text>
              <TextInput
                style={styles.textinput}
                onChangeText={setschool12th}
                value={school12th}
                placeholder="Name of School(12th Complete)"
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.title}>12th Percentage(%)</Text>
              <TextInput
                style={styles.textinput}
                onChangeText={setpercentage}
                editable={check12}
                value={percentage}
                placeholder="12th Percentage(%)"
                keyboardType="numeric"
                maxLength={2}
              />
            </View>
          </View>
        )}

        {checkC && (
          <View style={{marginBottom: 10, marginTop: 10}}>
            <Text style={styles.title}>Name of Collage(Complete)</Text>
            <TextInput
              style={styles.textinput}
              onChangeText={setcollage}
              editable={checkC}
              value={collage}
              placeholder="Name of Collage(Complete)"
            />
          </View>
        )}
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
              justifyContent: 'center',
              borderColor: 'blue',
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 100,
                borderRadius: 10,
                borderWidth: 5,
                borderColor: '#23B7FF',
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center', color: '#23B7FF', padding: 8}}>
                Previeus
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={onRegistration}
            style={{
              backgroundColor: '#23B7FF',
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
    color: '#23B7FF',
    fontWeight: '900',
  },
  textinput: {
    borderColor: '#23B7FF',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 50,
    paddingHorizontal: 20,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    elevation: 4,
  },
  cheackbox: {
    borderRadius: 5,
    height: 18,
    marginLeft: 10,
    width: 18,
    top: 7,
    left: 13,
    borderWidth: 1,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
  },
  checkimage: {
    height: 12,
    width: 12,
    tintColor: 'white',
    borderRadius: 4,
    position: 'absolute',
  },
});
