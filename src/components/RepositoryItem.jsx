import { Text, View } from 'react-native'

const RepositoryItem = ({ name, description, language, forkCount, starCount, ratingAverage, reviewCount}) => {
  return (
    <View>
      <Text>Full name: {name}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Stars: {starCount}</Text>
      <Text>Forks: {forkCount}</Text>
      <Text>Reviews: {reviewCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
    </View>
  )
}

export default RepositoryItem