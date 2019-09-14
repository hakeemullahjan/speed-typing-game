import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Score extends Component {
  render() {
    return (
      <View>
        
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text>Easy</Text>
          <Text>Medium</Text>
          <Text>Hard</Text>
        </View>
      </View>
    );
  }
}

export default Score;
