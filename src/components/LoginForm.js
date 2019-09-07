import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Card, CardSection, Input, Button} from './common';

class LoginForm extends Component {
  // static navigationOptions = {
  //   title: 'Please sign in',
  // };

  state = {
    email: '',
    username: '',
    password: '',
  };

  onButtonPress() {
    const {username, password} = this.state;
    console.log(username, password);
    //user collection
    //email, username & password to mongoDB by node & express
    this.props.navigation.navigate('App');
  }

  render() {
    const {username, password} = this.state;

    return (
      <View style={{flex:1}} >
        <View style={{marginTop:'auto',marginBottom:'auto'}} >
        <Card>
          <CardSection>
            <Input
              label="Username"
              placeholder="@username"
              value={username}
              onChangeText={username => this.setState({username})}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Password"
              placeholder="password"
              secureTextEntry
              value={password}
              onChangeText={password => this.setState({password})}
            />
          </CardSection>

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
          </CardSection>
        </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default LoginForm;
