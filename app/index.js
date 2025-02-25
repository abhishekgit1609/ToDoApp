import React , {useEffect, useState} from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AddIcon from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet , TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, FlatList } from "react-native";
import Tasks from '../Components/Tasks';
import {loadTaskFromStorage , storeTasksToStorage} from '../app/Storage';
const Index = () => {
  const [task , setTask] = useState();
  const [taskItems , setTaskItems] = useState([]);
  
  const handleAddTask = () =>{
    Keyboard.dismiss();
    const newTasks = [...taskItems , task];
     setTaskItems(newTasks);
     storeTasksToStorage(newTasks);
     setTask(null);
  }

   useEffect(()=>{
        const fetchTasks = async() =>{
          const tasks = await loadTaskFromStorage();
          if(tasks){
            setTaskItems(tasks);
          }
        };
        fetchTasks();
   },[]);

  const completeTask = (index) =>{
    let itemCopy = [...taskItems];
    itemCopy.splice(index,1);
    setTaskItems(itemCopy);
    storeTasksToStorage(itemCopy);
  }

  const scrollList  = ({item , index}) =>{
    return(
      <TouchableOpacity onPress={() => completeTask(index)} key={index}>
      <Tasks text={item} index={index} />
      </TouchableOpacity>
    )
  }
  
  return (
    // avoid notch and status bar
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>

        {/* Today's Task Text Container */}
        <View style={styles.textContainer}>
          <Text style={styles.textStyling}>Today's Tasks</Text>
        </View>

        {/* Task List Container */} 
        <View style={styles.taskItemsContainer}>
              <FlatList data={taskItems} renderItem={scrollList} keyExtractor={(item , index) => index.toString()} /> 
        </View>

        {/* Task Input Container */}

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.taskInputContainer}>
           <TextInput style={styles.textInputContainer} placeholder="Add a Task" value={task} onChangeText={text => setTask(text)} />
            <TouchableOpacity onPress={() => handleAddTask()} style={styles.taskAddBtn}>
              <AddIcon name="plus" size={20} style={styles.AddIconStyling} />
              </TouchableOpacity>
          </KeyboardAvoidingView>

    </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea:{
  flex:1,
  backgroundColor:'#E8EAED',
  },
 
  textContainer:{
   backgroundColor:'#E8EAED',
   flex:1,
   justifyContent:'center',
   
  },

  textStyling:{
  fontSize:40,
  marginLeft:"2%",
  fontWeight:'bold'
  },

  taskItemsContainer:{
  flex:5,
  backgroundColor:'#E8EAED'
  },
  textInputContainer:{
   backgroundColor:'#FFFFFF',
   borderRadius:20,
   margin:20,
   padding:10,
   width:'70%',
   height:50,
   borderWidth:1,
   textAlign:'center'
  },
  taskInput:{
   flex:2,
    backgroundColor:'red'
    
  },
  taskInputContainer:{
   flex:1,
   backgroundColor:'#E8EAED',
   flexDirection:'row',
    justifyContent:'center',
  },
 
  taskAddBtn:{
    width:50,
    height:50,
    backgroundColor:'#FFFFFF',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    margin:20,
    borderWidth:1
  },
  AddIconStyling:{
    textAlign:'center',
    tintColor:'grey'
  }
});

export default Index;
