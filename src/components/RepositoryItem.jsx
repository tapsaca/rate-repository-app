import { Image, StyleSheet, View } from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 10,
    height: 50,
    width: 50
  },
  container: {
    backgroundColor: 'white',
    gap: 10,
    padding: 10
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 10
  },
  language: {
    alignSelf: 'flex-start',
    borderRadius: 3,
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 3
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  valueText: {
    alignItems: 'center'
  }
})

const RepositoryItem = ({ name, description, language, forkCount, starCount, ratingAverage, reviewCount, avatarUrl }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View>
          <Image style={styles.avatar} source={{ uri: avatarUrl }} />
        </View>
        <View>
          <Text fontWeight='bold'>{name}</Text>
          <Text>{description}</Text>
          <Text style={styles.language}>{language}</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.valueText}>
          <Text fontWeight='bold'>{starCount > 1000 ? `${Math.round(starCount / 100) / 10} k` : starCount}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.valueText}>
          <Text fontWeight='bold'>{forkCount > 1000 ? `${Math.round(forkCount / 100) / 10} k` : forkCount}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.valueText}>
          <Text fontWeight='bold'>{reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.valueText}>
          <Text fontWeight='bold'>{ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  )
}

export default RepositoryItem