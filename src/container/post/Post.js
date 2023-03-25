import { View, Text, ScrollView, StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, GetData, updateData } from '../../redux/action/post.action'
import { SafeAreaView } from 'react-native-safe-area-context'
import { addData } from '../../redux/action/post.action'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { configStore } from '../../redux/Store'

export default function Post() {
    const dispatch = useDispatch()
    const postData = useSelector(state => state.postDig)
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [userId, setUserId] = useState('')
    const [msg, setMsg] = useState('')
    const [update,setUpdate] = useState(false)

    console.log(postData);
    useEffect(() => {
        dispatch(GetData())
    }, [])

    const AddData =()=>{
        let data = {
            id,
            title,
            userId,
            msg,
        }
        dispatch(addData(data))
        clearState()
    }
    const handleDelete = (id)=>{
        dispatch(deleteData(id))
    }
    const handleUpdate = (data) =>{
        setId(data.id.toString())
        setTitle(data.title)
        setUserId(data.userId.toString())
        setMsg(data.body)
        setUpdate(true)
    }
    const editData = () => {
        // console.log("--------------------------------",id,title,userId,msg);
        let uData = {
            id:parseInt(id),
            title:title,
            userId:parseInt(userId),
            body:msg,
        }
        dispatch(updateData(uData))
        clearState()
    }
    const clearState = () => {
        setId(null)
        setTitle(null)
        setUserId(null)
        setMsg(null)
        setUpdate(false)
    }
    // console.log(postData.id);  
    return (
        <SafeAreaView>
            <ScrollView>
                <TextInput
                    style={styles.input}
                    onChangeText={setId}
                    value={id}
                    placeholder="Id"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setTitle}
                    value={title}
                    placeholder="Title"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setUserId}
                    value={userId}
                    placeholder="UserId"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setMsg}
                    value={msg}
                    placeholder="Message"
                />
                <TouchableOpacity style={styles.button} onPress={update ? editData : AddData}>
                    <Text style={styles.txt}>Press Here</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={clearState}>
                    <Text style={styles.txt}>Clear</Text>
                </TouchableOpacity>
                <View>
                    {
                        postData.post.map((data, index) => {
                                return <>
                                <Text>{data.id}--------{data.title}
                                <MaterialCommunityIcons name="delete"  size={25} onPress={()=>{handleDelete(data.id)}}/>
                                <MaterialIcons name="edit"  size={25} onPress={()=>{handleUpdate(data)}}/>
                                </Text>
                                </>
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    txt:{
        color:'black',
    },
})