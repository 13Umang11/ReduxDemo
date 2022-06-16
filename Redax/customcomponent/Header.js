import React from 'react';
import {View, Text} from 'react-native';

export default function Header({title}) {
  return (
    <View
      style={{
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        backgroundColor: '#23B7FF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
      }}>
      <Text
        style={{
          alignSelf: 'center',
          color: 'white',
          textAlign: 'center',
          fontSize: 24,
          padding: 10,
        }}>
        {title}
      </Text>
    </View>
  );
}
