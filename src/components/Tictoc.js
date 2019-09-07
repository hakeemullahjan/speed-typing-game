import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';

class Tictoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 3,
      level: this.props.navigation.getParam('level'),
      levelCounter: this.props.navigation.getParam('levelCounter'),
    };
  }

  componentDidMount() {
    let timer = setInterval(() => {
      this.setState({counter: this.state.counter - 1});
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      this.props.navigation.navigate('GameScreen', {
        level: this.state.level,
        levelCounter: this.state.levelCounter,
      });
    }, 4000);
  }

  componentDidUpdate() {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
      LayoutAnimation.spring();
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={{fontSize: 70}}>{this.state.counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default Tictoc;
