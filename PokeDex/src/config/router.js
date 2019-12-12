import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screen/HomeScreen'
import DetailedInfo from '../screen/DetailedInfo'

const PageApp = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailedInfo
},
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  });

export const AppContainer = createAppContainer(PageApp);