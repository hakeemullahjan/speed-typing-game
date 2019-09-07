import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Header, Button, CardSection, Card} from './common';

class MainScreen extends Component {
  startTyping() {
    this.props.navigation.navigate('ChooseLevel');
  }

  render() {
    return (
      <View style={{flex:1}} >
        <View style={{marginTop:'auto',marginBottom:'auto'}}>
          <CardSection>
            <Button onPress={this.startTyping.bind(this)}>Start Typing</Button>
          </CardSection>

          <CardSection>
            <Button>High Scores</Button>
          </CardSection>
        </View>
      </View>
    );
  }
}

export default MainScreen;
