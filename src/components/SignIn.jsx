import { useFormik } from 'formik'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    margin: 10,
    padding: 10
  },
  container: {
    backgroundColor: 'white'
  },
  input: {
    borderRadius: 3,
    borderWidth: 1,
    margin: 10,
    padding: 10
  }
})

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  )
}

export default SignIn