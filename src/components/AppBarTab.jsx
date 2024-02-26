import { Pressable, StyleSheet, View } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    margin: 10
  }
})

const AppBarTab = () => {
  return (
    <Pressable>
      <View style={styles.container}>
        <Text color="textSecondary" fontSize="subheading" fontWeight="bold">
          Repositories
        </Text>
      </View>
    </Pressable>
  )
}

export default AppBarTab