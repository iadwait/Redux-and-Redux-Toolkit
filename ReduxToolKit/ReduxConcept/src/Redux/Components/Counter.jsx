import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, reset} from '../Slice/counterSlice'

const { width, height } = Dimensions.get('window')
const Counter = () => {
    const counterValue = useSelector((state) => state.myCounter.value)
    const dispatch = useDispatch();

    return (
        <View>
            <Text style={styles.title}>1. Counter</Text>
            <View style={styles.buttonContainer}>
            <Text style={{ fontSize: 18, fontWeight: '500'}}>Value: {counterValue}</Text>
                <TouchableOpacity style={styles.commonButton} onPress={() => dispatch(increment())}>
                    <View>
                        <Text style={styles.commonText}>
                            Increment
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commonButton} onPress={() => dispatch(decrement())}>
                    <View>
                        <Text style={styles.commonText}>
                            Decrement
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commonButton} onPress={() => dispatch(reset())}>
                    <View>
                        <Text style={styles.commonText}>
                            Reset
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    commonButton: {
        backgroundColor: 'lightblue',
        width: width*0.5,
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
        width: width*0.9,
        padding: 10
    }
})