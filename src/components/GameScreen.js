import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import words from '../word.json';

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.navigation.getParam('level'),
      words: words,
      levelCounter: this.props.navigation.getParam('levelCounter'),
      word: '',
      wordCount: 0,
      tictoc: this.props.navigation.getParam('levelCounter'),
      text: '',
      correctWord: 0,
    };
    this.nextWord = this.nextWord.bind(this);
    this.tiktok = this.tiktok.bind(this);
  }

  componentDidMount() {
    this.tiktok();
    this.nextWord();
    // let wordTimer = setInterval(this.nextWord, levelCounter * 1000);
    // let tiktokT = setInterval(this.tiktok, 1000);
  }

  nextWord() {
    const {words, wordCount, text, levelCounter} = this.state;
    let wordTimer = setInterval(() => {
      if (this.state.words[this.state.wordCount] === this.state.text.toLowerCase()) {
        this.setState({correctWord: this.state.correctWord + 1});
      }
      // next question conditon
      if (this.state.wordCount >= 9) {
        klear();

        this.props.navigation.navigate('Result', {
          correctWord: this.state.correctWord,
        });
      } else {
        // alert('next qie')
        this.setState({wordCount: this.state.wordCount + 1, text: ''});
      }
    }, levelCounter * 1000);

    function klear() {
      clearInterval(wordTimer);
    }
  }

  tiktok() {
    const {words, wordCount, text} = this.state;
    let tiktokT = setInterval(() => {
      if (this.state.wordCount >= 9) {
        klear();
      } else {
        if (this.state.tictoc === 1) {
          this.setState({tictoc: this.state.levelCounter});
        } else {
          this.setState({tictoc: this.state.tictoc - 1});
        }
      }
    }, 1000);

    function klear() {
      clearInterval(tiktokT);
    }
  }

  render() {
    const {word, words, wordCount, levelCounter, text, tictoc} = this.state;
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 13,
          }}>
          <Text style={{fontSize: 20, color: 'red'}}>{wordCount + 1}/10</Text>
          <Text style={{fontSize: 20, color: 'red'}}>
            00:{tictoc < 10 ? '0' + tictoc : tictoc}
          </Text>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text style={{fontSize: 35}}>{words[wordCount]}</Text>
          <TextInput
            style={{
              lineHeight: 27,
              borderBottomWidth: 2,
              fontSize: 25,
              textAlign: 'center',
              margin: 8,
            }}
            placeholder="Type"
            value={text}
            onChangeText={text => this.setState({text})}
          />
        </View>
      </View>
    );
  }
}

export default GameScreen;
