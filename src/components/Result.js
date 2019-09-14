import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header, Button, CardSection} from './common';

class Result extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText="Result" />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}>
          <Text style={{fontSize:25}} >Correct Word(s)</Text>
          <Text style={{fontSize:30}} >{this.props.navigation.getParam('correctWord')}</Text>
        </View>

        <View style={{marginTop: 'auto'}}>
          <CardSection>
            <Button onPress={() => this.props.navigation.navigate('App')}>
              HOME
            </Button>
          </CardSection>
          <CardSection>
            <Button
              onPress={() => this.props.navigation.navigate('ChooseLevel')}>
              TRY AGAIN
            </Button>
          </CardSection>
        </View>
      </View>
    );
  }
}
export default Result;
