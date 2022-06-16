import React from 'react';
import {Dimensions, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function CTDropDown({
  itemKey,
  onOpen,
  onValue,
  onItems,
  onChangeValue,
  setOpen,
  setValue,
  setItems,
}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <View>
        <DropDownPicker
          itemKey={itemKey}
          style={{
            marginHorizontal: 15,
            width: Dimensions.get('screen').width - 40,
            elevation: 4,
            marginHorizontal: 20,
            borderRadius: 25,
            paddingHorizontal: 20,
            borderColor: '#22B7FF',
          }}
          open={onOpen}
          value={onValue}
          items={onItems}
          showTickIcon={false}
          showArrowIcon={false}
          onChangeValue={onChangeValue}
          selectedItemContainerStyle={{backgroundColor: 'gray'}}
          selectedItemLabelStyle={{color: 'white'}}
          dropDownContainerStyle={{
            backgroundColor: '#dfdfdf',
            width: Dimensions.get('screen').width - 40,
            marginHorizontal: 20,
            borderColor: '#22B7FF',
          }}
          textStyle={{shadowColor: 'black'}}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
    </View>
  );
}
