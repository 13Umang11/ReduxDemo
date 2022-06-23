import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const ViewA = () => {
  const [tr, settr] = useState(false);
  const [name, setname] = useState('Umang');
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="ViewB"
        onPress={() =>
          navigation.navigate('ViewB', {
            handleItem: item => {
              settr(item.true);
              setname(item.name);
              console.log('====================================');
              console.log(item);
              console.log('====================================');
            },
          })
        }
      />
    </View>
  );
};

const ViewB = ({route}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="ViewA"
        onPress={() => {
          route.params.handleItem({true: true, name: 'sbdvnbslkv'});
          navigation.goBack();
        }}
      />
    </View>
  );
};

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ViewA" component={ViewA} />
        <Stack.Screen name="ViewB" component={ViewB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
