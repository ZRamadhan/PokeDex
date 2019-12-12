import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import PokemonList from '../function/PokemonList'
import { View } from 'react-native'
import { Content, Container } from 'native-base'

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View>
            <PokemonList />
          </View>
        </Content>
      </Container>
    )
  }
}

export default withNavigation(HomeScreen);