import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from '../utilities/Style'
import {
  Content, List, ListItem, Left,
  Body, Right
} from 'native-base'
import { withNavigation } from 'react-navigation'

class PokemonName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      imagePokemon: '',
      indexPokemon: ''
    }
  }

  propPokemon = () => {
    const { name, url } = this.props
    const indexPokemon = url.split('/')[url.split('/').length - 2];
    const imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${indexPokemon}.png`
    this.setState({
      name: name,
      imagePokemon: imagePokemon,
      indexPokemon: indexPokemon
    })
  }

  componentDidMount() {
    this.propPokemon()
  }

  render() {
    return (
      <Content>
        <List>
          <ListItem thumbnail>

            <TouchableOpacity style={styles.touchableDimension}
            onPress={() => this.props.navigation.navigate('Detail', {index: this.state.indexPokemon})}>
              <View style={styles.numberWidth}>
                <Left>
                  <Text>{this.state.indexPokemon}</Text>
                </Left>
              </View>


              <Body>
                <Text>{this.state.name
                  .toLowerCase().split(' ')
                  .map(letter => letter.charAt(0).toUpperCase() + letter.substr(1)).join(' ')}
                </Text>
              </Body>

              <View style={styles.imageThumbnail}>
                <Right>
                  <Image style={{ width: 55, height: 55 }} source={{ uri: this.state.imagePokemon }} />
                </Right>
              </View>
            </TouchableOpacity>

          </ListItem>
        </List>
      </Content>
    )
  }
}

export default withNavigation(PokemonName);