import { ScrollView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    paddingTop: Constants.statusBarHeight,
  }
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <AppBarTab path='/' text='Repositories' />
        <AppBarTab path='/signin' text='Sign In' />
      </ScrollView>
    </View>
  )
}

export default AppBar