import React, { Component } from 'react'
import axios from 'axios'
import PokemonName from './PokemonName'
import { Text, View } from 'react-native'

class PokemonList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000',
      pokemon: []
    }
  }

  pokemonData = async () => {
    try {
      const list = await axios({
        method: 'GET',
        url: this.state.url
      })
      if (list.data) {
        this.setState({ pokemon: list.data.results })
      }
    }
    catch (error) {
      return error.response
    }
  }

  componentDidMount() {
    this.pokemonData()
  }

  render() {
    return (
      <View>
        {(this.state.pokemon.length !== 0) ?
          this.state.pokemon.map((pokemon, i) => (
            <PokemonName
              key={i}
              name={pokemon.name}
              url={pokemon.url} />))
          :
          <Text style={{textAlign: 'center', marginTop: 150, fontSize: 20}}>
            Loading...
          </Text>
        }
      </View>
    )
  }
}

export default PokemonList;