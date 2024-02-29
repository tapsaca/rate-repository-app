import { StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Text from './Text'

const styles = StyleSheet.create({
  tab: {
    padding: 20
  }
})

const AppBarTab = ({ path, text }) => {
  return (
    <Link to={path}>
      <Text style={styles.tab} color='textSecondary' fontSize='subheading' fontWeight='bold'>
        {text}
      </Text>
    </Link>
  )
}

export default AppBarTab