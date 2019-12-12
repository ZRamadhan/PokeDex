import React, { Component } from 'react'
import axios from 'axios'
import styles from '../utilities/Style'
import { withNavigation } from 'react-navigation'
import { Text, View, Image } from 'react-native'
import { Container } from 'native-base'

class PokemonDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      id: '',
      baseExp: '',
      image: '',
      types: [],
      height: '',
      weight: '',
      abilities: [],
      stats: {
        hp: '',
        attack: '',
        defense: '',
        specialAttack: '',
        specialDefense: '',
        speed: ''
      }
    }
  }

  detailedInfo = async () => {
    const index = await this.props.navigation.getParam('index')
    try {
      const detail = await axios({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/pokemon/${index}/`
      })

      // pokemon basic detail
      const name = detail.data.name.toLowerCase().split(' ')
        .map(char => char.charAt(0).toUpperCase() + char.substr(1)).join(' ')
      const id = detail.data.id
      const baseExp = detail.data.base_experience
      const image = detail.data.sprites.front_default
      const height = detail.data.height
      const weight = detail.data.weight

      // pokemon stats
      let { hp, attack, defense, specialAttack, specialDefense, speed } = ''
      detail.data.stats.map(item => {
        switch (item.stat.name) {
          case 'hp': hp = item['base_stat']
            break;
          case 'attack': attack = item['base_stat']
            break;
          case 'defense': defense = item['base_stat']
            break;
          case 'special-defense': specialDefense = item['base_stat']
            break;
          case 'special-attack': specialAttack = item['base_stat']
            break;
          case 'speed': speed = item['base_stat']
            break;
        }
      })

      // pokemon types
      const types = detail.data.types.map(item => item.type.name.toLowerCase().split(' ')
        .map(char => char.charAt(0).toUpperCase() + char.substr(1)).join(' '))

      // pokemon abilities
      const abilities = detail.data.abilities.map(item => {
        return item.ability.name.toLowerCase()
          .split('-')
          .map(char => char.charAt(0).toUpperCase() + char.substring(1))
          .join(' ')
      })

      this.setState({
        name: name,
        id: id,
        baseExp: baseExp,
        image: image,
        height: height,
        weight: weight,
        abilities: abilities,
        types: types,
        stats: {
          hp,
          attack,
          defense,
          specialAttack,
          specialDefense,
          speed
        }
      })
    }
    catch (error) {
      return error
    }
  }

  componentDidMount() {
    this.detailedInfo()
  }

  render() {
    return (
      <View>
        {(this.state.types.length === 0) ?
          <Text style={{ textAlign: 'center', marginTop: 150, fontSize: 20 }}>
            Loading...
          </Text>

          :

          <Container style={{ alignItems: 'center' }}>
            <View style={styles.detailedCard}>

              <View style={{ width: '13%', marginLeft: '2%', marginTop: '2%' }}>
                <Text style={{ fontSize: 18 }}>#{this.state.id}</Text>
              </View>

              <View style={{ width: '30%', height: '100%', marginTop: '1%' }}>
                <Text style={{ fontSize: 23, fontWeight: 'bold', height: 35 }}> {this.state.name} {'\n'}</Text>
                <Text style={{ marginLeft: '5%', marginTop: '-2%', fontWeight: 'bold' }}>Type</Text>
                {this.state.types.map((item, i) => (
                  <Text key={i} style={{ marginLeft: '5%' }}>{item}</Text>
                ))}
              </View>

              <View style={{ width: '30%', height: '100%', marginTop: '10%', alignItems: 'flex-end' }}>
                <Text style={{ fontWeight: 'bold' }}>Base Exp.</Text>
                <Text>{this.state.baseExp}</Text>
              </View>

              <View style={{ width: '25%', height: '100%', justifyContent: 'center', alignContent: 'center' }}>
                <Image style={{ width: 100, height: 100 }} source={{ uri: this.state.image }} />
              </View>

            </View>

            <View style={{ width: '100%' }}>
              <View style={{ marginTop: '4%', marginLeft: '5%' }}>
                <Text style={{ marginLeft: '5%', fontSize: 18, fontWeight: 'bold' }}>
                  Appearance
            </Text>

                <Text style={{ alignSelf: 'flex-start', marginTop: '2%' }}>
                  {`Height ${this.state.height}`} {'\n'}

                  {`Weight ${this.state.weight}`} {'\n'}
                </Text>

                <View style={{ height: 1.5, width: '100%', backgroundColor: 'black', marginLeft: '-2%', marginTop: '2%', marginBottom: '2%' }} />

                <Text style={{ marginLeft: '5%', fontSize: 18, fontWeight: 'bold' }}>
                  Abilities
            </Text>

                <Text style={{ alignSelf: 'flex-start', marginTop: '2%' }}>
                  {this.state.abilities.map((item, i) => (
                    <Text key={i}>{item} {'\n'}</Text>
                  ))}
                </Text>

                <View style={{ height: 1.5, width: '100%', backgroundColor: 'black', marginLeft: '-2%', marginTop: '2%', marginBottom: '2%' }} />

                <Text style={{ marginLeft: '5%', fontSize: 18, fontWeight: 'bold' }}>
                  Base Stats
            </Text>

                <View style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', marginRight: '65%', marginTop: '2%' }}>
                  <Text>Hp</Text>
                  <Text>{this.state.stats.hp}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', marginRight: '65%' }}>
                  <Text>Speed</Text>
                  <Text>{this.state.stats.speed}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', marginRight: '65%', }}>
                  <Text>Attack</Text>
                  <Text>{this.state.stats.attack}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', marginRight: '65%' }}>
                  <Text>Special Attack</Text>
                  <Text>{this.state.stats.specialAttack}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', marginRight: '65%' }}>
                  <Text>Defense</Text>
                  <Text>{this.state.stats.defense}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', marginRight: '65%' }}>
                  <Text>Special Defense</Text>
                  <Text>{this.state.stats.specialDefense}</Text>
                </View>
              </View>
            </View>
          </Container>
        }
      </View>
    )
  }
}

export default withNavigation(PokemonDetail)