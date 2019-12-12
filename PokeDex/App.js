import React, { Component } from 'react'
import { View } from 'react-native'
import { AppContainer } from './src/config/router'
import { Container } from 'native-base'

export default class App extends Component {
  render() {
    return (
      <Container>
        <AppContainer />
      </Container>
    )
  }
}
