import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/actions/counterActions';

const Counter = () => {

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 18 }}>{`Counter: ${count}`}</Text>
      <Button title='Increment' onPress={() => dispatch(increment())} />
      <Button title='Decrement' onPress={() => dispatch(decrement())} />
    </View>
  )
}

export default Counter