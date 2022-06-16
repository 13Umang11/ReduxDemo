import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../customcomponent/Header';
import {useSelector} from 'react-redux';

export default function UserDetail({navigation}) {
  // const [userDetails, setuserDetails] = useState({});
  // const [check10, setcheck10] = useState('');
  // const [check12, setcheck12] = useState('');
  let json = {};
  let check10 = '';
  let check12 = '';
  useSelector(data => {
    console.log(data.MainReducer);
    json = data.MainReducer;
    check10 = data.MainReducer.qualification_Info.school10th;
    check12 = data.MainReducer.qualification_Info.school12th;
    // setcheck10(data.MainReducer.qualification_Info.school10th);
    // setcheck12(data.MainReducer.qualification_Info.school12th);
    return data;
  });

  console.log('json', json.address_Info);
  return (
    <View style={{flex: 1}}>
      <Header title="Your Details" />
      <ScrollView>
        <View
          style={{
            backgroundColor: '#DEF4FF',
            margin: 20,
            padding: 10,
            borderRadius: 10,
            // overflow: 'hidden',
            elevation: 5,
          }}>
          {console.log('check10', check10)}
          <View>
            <Text
              style={{
                color: '#000',
                borderBottomColor: '#000',
                borderBottomWidth: 1,
                alignSelf: 'center',
                fontSize: 22,
                marginTop: 10,
              }}>
              Profile Info
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{margin: 10, color: '#23B7FF'}}>Name</Text>
              <Text style={{margin: 10, color: 'green', fontWeight: '800'}}>
                {json.profile_Info.firstName} {json.profile_Info.lastName}
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{margin: 10, color: '#23B7FF'}}>Nickname</Text>
              <Text style={{margin: 10, color: 'green', fontWeight: '800'}}>
                {json.registation_Info.nickname}
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{margin: 10, color: '#23B7FF'}}>Gender</Text>
              <Text style={{margin: 10, color: 'green', fontWeight: '800'}}>
                {json.profile_Info.gender}
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{margin: 10, color: '#23B7FF'}}>Date of Birth</Text>
              <Text style={{margin: 10, color: 'green', fontWeight: '800'}}>
                {json.profile_Info.dateofbirth}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: '#000',
                borderBottomWidth: 1,
                alignSelf: 'center',
                fontSize: 22,
                marginTop: 30,
                color: '#000',
                borderBottomColor: '#000',
              }}>
              Contact Info
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                overflow: 'hidden',
              }}>
              <Text style={{margin: 10, color: '#23B7FF'}}>Mobile No</Text>
              <Text style={{margin: 10, color: 'green', fontWeight: '800'}}>
                {json.profile_Info.mobileNo}
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{margin: 10, color: '#23B7FF'}}>Email ID</Text>
              <Text style={{margin: 10, color: 'green', fontWeight: '800'}}>
                {json.registation_Info.email}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                overflow: 'hidden',
              }}>
              <Text
                style={{
                  margin: 10,
                  color: '#23B7FF',
                  justifyContent: 'space-around',
                }}>
                Address
              </Text>

              <Text
                style={{
                  color: 'green',
                  fontWeight: '800',
                  textAlign: 'right',
                  margin: 10,
                  width: 210,
                }}>
                {json.address_Info.house},{json.address_Info.landmark},
                {json.address_Info.area},{json.address_Info.city},
                {json.address_Info.pincode}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: '#000',
                borderBottomWidth: 1,
                alignSelf: 'center',
                fontSize: 22,
                marginTop: 30,
                color: '#000',
                borderBottomColor: '#000',
              }}>
              Education Qualification
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{margin: 10, color: '#23B7FF'}}>10th</Text>
              <Text
                style={{
                  margin: 10,
                  color: json.qualification_Info.check10 ? 'green' : 'red',
                  fontWeight: '800',
                }}>
                {json.qualification_Info.check10
                  ? 'Completed'
                  : 'Not Completed'}
              </Text>
            </View>
            {String(json.qualification_Info.school10th) ? (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{margin: 10, color: '#23B7FF'}}>
                  Name of School(10th)
                </Text>
                <Text
                  style={{
                    margin: 10,
                    color: 'green',
                    fontWeight: '800',
                    width: 125,
                    textAlign: 'right',
                  }}>
                  {json.qualification_Info.school10th}
                </Text>
              </View>
            ) : (
              <View />
            )}
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{margin: 10, color: '#23B7FF'}}>12th</Text>
              <Text
                style={{
                  margin: 10,
                  color: json.qualification_Info.check12 ? 'green' : 'red',
                  fontWeight: '800',
                }}>
                {json.qualification_Info.check12
                  ? 'Completed'
                  : 'Not Completed'}
              </Text>
            </View>
            {String(json.qualification_Info.school12th) ? (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{margin: 10, color: '#23B7FF'}}>
                    Name of School(12th)
                  </Text>
                  <Text
                    style={{
                      margin: 10,
                      color: 'green',
                      fontWeight: '800',
                      width: 125,
                      textAlign: 'right',
                    }}>
                    {json.qualification_Info.school12th}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{margin: 10, color: '#23B7FF'}}>
                    12th Percentage
                  </Text>
                  <Text style={{margin: 10, color: 'green', fontWeight: '800'}}>
                    {json.qualification_Info.percentage}%
                  </Text>
                </View>
              </View>
            ) : (
              <View />
            )}
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  margin: 10,
                  color: '#23B7FF',
                }}>
                Collage
              </Text>
              <Text
                style={{
                  margin: 10,
                  color: json.qualification_Info.checkC ? 'green' : 'red',
                  fontWeight: '800',
                }}>
                {json.qualification_Info.checkC ? 'Completed' : 'Not Completed'}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}
            style={{
              backgroundColor: '#23B7FF',
              justifyContent: 'center',
              marginHorizontal: 10,
              borderRadius: 10,
              marginVertical: 10,
            }}>
            <Text style={{color: '#fff', textAlign: 'center', padding: 10}}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
