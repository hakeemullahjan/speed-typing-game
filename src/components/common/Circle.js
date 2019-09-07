import React from 'react';
import {View} from 'react-native';

const Circle = props => {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: props.color,
      }}
    />
  );
};

export {Circle};
