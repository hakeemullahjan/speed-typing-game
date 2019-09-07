import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';


class Result extends Component{
    render(){
        return(
            <View>
                <Text>CORRECT WORD{this.props.navigation.getParam('correctWord')}</Text>
                <Button title='HOME' onPress={()=>this.props.navigation.navigate('App')} />
            </View>
        )
    }
}
export default Result;
