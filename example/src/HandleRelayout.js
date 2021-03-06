import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Interactable from 'react-native-interactable';

export default class HandleRelayout extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    };
  }
  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={this.onChangeLayoutPress.bind(this)}>
          <View style={[styles.card, {
            justifyContent: 'center',
            backgroundColor: 'green',
            height: this.state.collapsed ? 80 : 180
          }]}>
            <Text style={styles.label}>Tap to {this.state.collapsed ? 'expand' : 'collapse'}</Text>
          </View>
        </TouchableOpacity>

        <Interactable.View
          horizontalOnly={true}
          snapTo={[{x: 360},{x: 0},{x: -360}]}>
          <View style={styles.card} />
        </Interactable.View>

      </View>
    );
  }
  onChangeLayoutPress() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  card: {
    width: 300,
    height: 180,
    backgroundColor: 'red',
    borderRadius: 8,
    marginVertical: 6,
    borderWidth: 0.5
  },
  label: {
    textAlign: 'center',
    fontSize: 24
  }
});
