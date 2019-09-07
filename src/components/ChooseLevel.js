import React, {Component} from 'react';
import {Circle} from './common';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Tictoc from './Tictoc';

class ChooseLevel extends Component {
  onSelectLevel(level, levelCounter) {
    this.props.navigation.navigate('Tictoc', {
      level: level,
      levelCounter: levelCounter,
    });
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity
          style={styles.spaceStyle}
          onPress={this.onSelectLevel.bind(this, 'esay', 15)}>
          <Circle color="green" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.spaceStyle}
          onPress={this.onSelectLevel.bind(this, 'medium', 10)}>
          <Circle color="yellow" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.spaceStyle}
          onPress={this.onSelectLevel.bind(this, 'hard', 5)}>
          <Circle color="red" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spaceStyle: {
    margin: 20,
  },
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default ChooseLevel;
