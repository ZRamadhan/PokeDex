import React, { Component } from 'react'
import axios from 'axios'
import PokemonName from './PokemonName'
import { Text, View } from 'react-native'
import { Picker, Form, Item } from 'native-base'

class PokemonList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urlAll: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10',
      urlPokeType: 'https://pokeapi.co/api/v2/type/',
      urlSelect: '',
      pokemon: [],
      pokemonType: {
        a: '', b: '', c: '', d: '', e: '',
        f: '', g: '', h: '', i: '', j: '',
        k: '', l: '', m: '', n: '', o: '',
        p: '', q: '', r: '', s: '', t: ''
      }
    }
  }

  urlSelector = async () => {
   if (this.state.urlSelect.length === 0) {
      console.log('true', this.state.urlSelect.length)
      await this.setState({ urlSelect: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=300' })
    }
    console.log('url selector', this.state.urlSelect)
  }

  pokemonData = async () => {
    const url = await this.state.urlSelect
    try {
      const list = await axios({
        method: 'GET',
        url: this.state.urlSelect
      })
      if (list.data) {
        this.setState({ pokemon: list.data.results })
      }
    }
    catch (error) {
      return error.response
    }
  }

  pokemonType = async () => {
    try {
      const list = await axios({
        method: 'GET',
        url: this.state.urlPokeType
      })
      console.log(list.data)
      if (list.data) {
        list.data.results.map(item => {
          switch (item.name) {
            case 'normal':
              a = item.url
              break;
            case 'fighting':
              b = item.url
              break;
            case 'flying':
              c = item.url
              break;
            case 'poison':
              d = item.url
              break;
            case 'ground':
              e = item.url
              break;
            case 'rock':
              f = item.url
              break;
            case 'bug':
              g = item.url
              break;
            case 'ghost':
              h = item.url
              break;
            case 'steel':
              i = item.url
              break;
            case 'fire':
              j = item.url
              break;
            case 'water':
              k = item.url
              break;
            case 'grass':
              l = item.url
              break;
            case 'electric':
              m = item.url
              break;
            case 'psychic':
              n = item.url
              break;
            case 'ice':
              o = item.url
              break;
            case 'dragon':
              p = item.url
              break;
            case 'dark':
              q = item.url
              break;
            case 'fairy':
              r = item.url
              break;
            case 'unknown':
              s = item.url
              break;
            case 'shadow':
              t = item.url
              break;
          }
        })

        this.setState({
          pokemonType: {
            a, b, c, d, e,
            f, g, h, i, j,
            k, l, m, n, o,
            p, q, r, s, t
          }
        })
      }
    }
    catch (error) {
      return error.response
    }
  }

  componentDidMount() {
    this.urlSelector()
    setInterval(this.urlSelector, 1000)
    
    this.pokemonData()
    this.pokemonType()
    console.log('last component did mount')
  }

  render() {
    return (
      <View>
        {(this.state.pokemon.length === 0) ?
          <Text style={{ textAlign: 'center', marginTop: 150, fontSize: 20 }}>
            Loading...
      </Text>
          :
          <View>
            <Form>
              <Picker note
                mode='dropdown'
                selectedValue={this.state.urlSelect}
                onValueChange={(item) => this.setState({ urlSelect: item })}
              >
                <Picker.Item label='All' value={this.state.urlAll} />
                <Picker.Item label='Normal' value={this.state.pokemonType.a} />
                <Picker.Item label='Fighting' value={this.state.pokemonType.b} />
                <Picker.Item label='Flying' value={this.state.pokemonType.c} />
                <Picker.Item label='Poison' value={this.state.pokemonType.d} />
                <Picker.Item label='Ground' value={this.state.pokemonType.e} />
                <Picker.Item label='Rock' value={this.state.pokemonType.f} />
                <Picker.Item label='Bug' value={this.state.pokemonType.g} />
                <Picker.Item label='Ghost' value={this.state.pokemonType.h} />
                <Picker.Item label='Steel' value={this.state.pokemonType.i} />
                <Picker.Item label='Fire' value={this.state.pokemonType.j} />
                <Picker.Item label='Water' value={this.state.pokemonType.k} />
                <Picker.Item label='Grass' value={this.state.pokemonType.l} />
                <Picker.Item label='Electric' value={this.state.pokemonType.m} />
                <Picker.Item label='Psychic' value={this.state.pokemonType.n} />
                <Picker.Item label='Ice' value={this.state.pokemonType.o} />
                <Picker.Item label='Dragon' value={this.state.pokemonType.p} />
                <Picker.Item label='Dark' value={this.state.pokemonType.q} />
                <Picker.Item label='Fairy' value={this.state.pokemonType.r} />
                <Picker.Item label='Unknown' value={this.state.pokemonType.s} />
                <Picker.Item label='Shadow' value={this.state.pokemonType.t} />

              </Picker>
            </Form>

            {this.state.pokemon.map((pokemon, i) => (
              <View key={i}>
                <PokemonName
                  key={i}
                  name={pokemon.name}
                  url={pokemon.url} />
              </View>))}
          </View>
        }
      </View>
    )
  }
}

export default PokemonList;