import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Animated } from 'react-native';

class Emoji extends Component {
  constructor(props) {
    super(props);
    this.scored=['👍', '👏', '👋', '😎', '💪', '⚽', '❗', '🐐', '❤️'];
    this.missed = ['😢', '😭', '😔', '😡', '😠', '💔', 'try 🏀', 'You may be better at 🏈', '😱'];
    this.state = {
        opacity: new Animated.Value(0),
    };
  }

  render() {
    let randomIndex = Math.floor(Math.random() * 9);
    let emojiChar = '';
    if (this.props.lost === true) {
      emojiChar = this.missed[randomIndex];
    } else {
      emojiChar = this.scored[randomIndex]
    }
    let windowWidth = Dimensions.get('window').width;
    let position = {
      width: windowWidth,
      top: this.props.y,
      opacity: this.state.opacity,
    }
    return (
      <Animated.View style={[styles.container, position]}>
        <Text style={styles.emoji}>
          {emojiChar}
        </Text>
      </Animated.View>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.scored !== this.props.scored) || (nextProps.lost !== this.props.lost);
  }

  componentDidUpdate() {
    this.state.opacity.setValue(1);
    Animated.timing(
      this.state.opacity,
      {
        toValue: 0,
        duration: 1000,
      }
    ).start()
  }

}

const styles = StyleSheet.create({

  container: {
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  emoji: {
      flex: 1,
      fontSize: 55,
      backgroundColor: 'transparent',
      color: 'white'
  }
});

export default Emoji;
