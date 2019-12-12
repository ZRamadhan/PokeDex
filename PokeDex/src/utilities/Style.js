import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    touchableDimension: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width,
        alignItems: 'center'
    },
    imageThumbnail: {
        width: 60,
        height: 60,
        marginRight: '5%'
    },
    numberWidth: {
        width: Dimensions.get('window').width/8,
        justifyContent: 'center'
    },
    pageButtonDirection: {
      flexDirection: 'row',
      height: '6%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlignVertical: 'center'
    },
    pageButtonSize: {
      width: '50%',
      marginTop: '2%',
      marginBottom: '5%'
      
    },
    detailedCard: {
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: '2%',
      marginLeft: '2%',
      width: '96%',
      height: Dimensions.get('window').height/8,
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 5
    }
})

export default styles