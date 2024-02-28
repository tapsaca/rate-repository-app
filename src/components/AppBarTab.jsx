import { StyleSheet, View } from 'react-native'
import { Link } from 'react-router-native'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10
  }
})

const AppBarTab = () => {
  return (
    <View style={styles.container}>
      <Link to='/'>
        <Text color='textSecondary' fontSize='subheading' fontWeight='bold'>
          Repositories
        </Text>
      </Link>
      <Link to='/signin'>
        <Text color='textSecondary' fontSize='subheading' fontWeight='bold'>
          Sign In
        </Text>
      </Link>
    </View>
  )
}

export default AppBarTab