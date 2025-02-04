import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { loginFailure, loginSuccess, logout } from '../redux/actions/authActions'

const Login = () => {

  const { isAuthenticated, user, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch();

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (userName === 'Adwait' && password === 'Adwait123') {
      dispatch(loginSuccess({ username: 'Adwait' }))
    } else if (userName === '' || password === '') {
      dispatch(loginFailure('Username or password cannot be blank'))
    } else {
      dispatch(loginFailure('Invalid Credentials !!'))
    }
  }

  const handleLogout = () => {
    dispatch(logout())
    setUsername('')
    setPassword('')
  }

  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 18 }}>Login:</Text>
      <TextInput
        placeholder='Enter Name'
        style={styles.input}
        onChangeText={setUsername}
        value={userName}
      />
      <TextInput
        placeholder='Enter Password'
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={handleLogin} style={{ alignItems: 'center' }}>
        <View style={styles.loginButton}>
          <Text style={{ textAlign: 'center' }}>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout} style={{ alignItems: 'center' }}>
        <View style={styles.loginButton}>
          <Text style={{ textAlign: 'center' }}>Logout</Text>
        </View>
      </TouchableOpacity>
      <Text>Store Values: </Text>
      <Text>{`isAuthenticated: ${isAuthenticated}`}</Text>
      <Text>{`user: ${user?.username ?? 'NA'}`}</Text>
      <Text>{`error: ${error}`}</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 8
  },
  loginButton: {
    width: 150,
    backgroundColor: 'lightblue',
    padding: '10',
    marginHorizontal: 40,
    borderRadius: 20,
    marginVertical: 4
  }
})