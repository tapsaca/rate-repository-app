import { useFormik } from 'formik'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import * as yup from 'yup'
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
  errorBorder: {
    borderColor: 'red'
  },
  errorText: {
    color: 'red',
    paddingLeft: 10
  },
  input: {
    borderRadius: 3,
    borderWidth: 1,
    margin: 10,
    padding: 10
  }
})

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
})

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema,
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, formik.errors.username ? styles.errorBorder : null]}
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorText}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={[styles.input, formik.errors.password ? styles.errorBorder : null]}
        secureTextEntry={true}
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  )
}

export default SignIn