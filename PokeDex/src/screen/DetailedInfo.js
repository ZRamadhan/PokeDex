import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import PokemonDetail from '../function/PokemonDetail'
import { View } from 'react-native'

class DetailedInfo extends Component {
  render() {
    return (
      <View>
        <PokemonDetail />
      </View>
    )
  }
}

export default withNavigation(DetailedInfo);