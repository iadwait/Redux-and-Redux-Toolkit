import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, setError } from '../Slice/LoginSlice'

const { width, height } = Dimensions.get('window')
const Login = () => {

    const loginStateVal = useSelector((state) => state.loginState)
    const dispatch = useDispatch();

    const loginUser = () => {
        dispatch(login({ userName: 'Adwait', password: 'test@123' }));
    }

    const logoutUser = () => {
        dispatch(logout())
    }

    const setErrorMessage = () => {
        dispatch(setError('Something went wrong'))
    }

    return (
        <View>
            <Text style={styles.title}>2. Login</Text>
            <View style={styles.buttonContainer}>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>
                    isLoggedIn: {loginStateVal.isLoggedIn.toString()}
                </Text>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>
                    userData: {loginStateVal.user ? loginStateVal.user.userName : 'No user data'}
                </Text>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>
                    Error: {loginStateVal.error}
                </Text>
                <TouchableOpacity style={styles.commonButton} onPress={loginUser}>
                    <View>
                        <Text style={styles.commonText}>
                            Login
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commonButton} onPress={logoutUser}>
                    <View>
                        <Text style={styles.commonText}>
                            Logout
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commonButton} onPress={setErrorMessage}>
                    <View>
                        <Text style={styles.commonText}>
                            SetError
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    commonButton: {
        backgroundColor: 'lightblue',
        width: width * 0.5,
        padding: 10,
        marginBottom: 5
    },
    commonText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500'
    },
    buttonContainer: {
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        margin: 10,
        backgroundColor: 'lightgray',
        width: width * 0.9,
        padding: 10
    }
})