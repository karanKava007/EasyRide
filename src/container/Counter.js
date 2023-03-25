import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/action/count.action';

export default function Counter() {
    const dispatch = useDispatch();
    const countData = useSelector(state => state.countDig);

    // console.log("View", countData);
    // const handleIncrement = () => {
    //     dispatch(increment())
    // }

    // const handleDecrement = () => {
    //     dispatch(decrement())
    // }

    return (
        <View>
            <Button title='Increment' onPress={() =>  dispatch(increment())}/>
                {/* <Text>+</Text> */}
            {/* </Button> */}
            <Text style={{textAlign:'center',fontSize:50}}>{countData.count}</Text>
            <Button title='Decrement' onPress={() => dispatch(decrement())}/>
                {/* <Text>-</Text> */}
            {/* </Button> */}
        </View>
    )
}