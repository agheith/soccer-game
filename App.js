import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const LC_IDLE = 0;
const LC_RUNNING = 1;
const LC_TAPPED = 2;
const GRAVITY = 0.8;
const TAPPED_VELOCITY = 20;
const ROTATION_FACTOR = 7;

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const BALL_WIDTH = SCREEN_WIDTH * 0.33;
const BALL_HEIGHT = SCREEN_WIDTH * 0.33;
const FLOOR_Y = SCREEN_HEIGHT - BALL_HEIGHT;
const FLOOR_X = SCREEN_WIDTH / 2;
const SCORE_Y = SCREEN_HEIGHT / 6;
const EMOJI_Y = SCREEN_HEIGHT / 3;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      x: FLOOR_X,
      y: FLOOR_Y,
      score: 0,
      scored: false,
      lost: false,
      rotate: 0,
    };
  }


  render() {
    var position = {
        left: this.state.x - (BALL_WIDTH / 2),
        top: this.state.y - (BALL_HEIGHT / 2),
    }

    var rotation = {
        transform: [
            {rotate: this.state.rotate + 'deg'},
        ],
    }

    return (
      <View>
        <Score score={this.state.score} y={SCORE_Y} scored={this.state.scored} />
        <Emoji scored={this.state.scored} y={EMOJI_Y} lost={this.state.lost} />
        <Image
          source={require('./src//images/soccer_ball.png')}
          style={[styles.ball, position, rotation]}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    ball: {
        width: BALL_WIDTH,
        height: BALL_HEIGHT,
    },
});
