import React from "react";
import AddIcon from 'react-native-vector-icons/AntDesign';
import { Text, View, StyleSheet , TextInput, TouchableOpacity } from "react-native";
import Tasks from '../Components/Tasks';
const Index = () => {
  return (
    // main Container for the app
    <View style={styles.mainContainer}>
      {/* Text for the app */}
      <Text style={styles.textContainer}>Today’s tasks.</Text>

      {/* items for the app  */}

       <View style={styles.taskItems}>
            <Tasks />
            <Tasks />
       </View>
      
        <View style={styles.taskInput}>
          <TextInput placeholder="Add a task" style={styles.textInputContainer} />
          <TouchableOpacity style={styles.taskAddBtn}>
            <AddIcon name="plus" size={30} color="grey"  style={styles.AddIconStyling}/>
          </TouchableOpacity>
        </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:'#E8EAED'
  },
  textContainer:{
    fontSize: 40,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    marginTop:'10%',
    padding:'5%'
  },
  textInputContainer:{
    padding:10,
    fontSize:20,
    backgroundColor:'#FFFFFF',
    width:'70%',
    marginLeft:'5%',
    borderRadius:20,
    marginTop:'100%',
    textAlign:'center',
  },
  taskInput:{
    flexDirection:'row',
   
  },
  taskAddBtn:{
    width:50,
    height:50,
    backgroundColor:'#FFFFFF',
    borderRadius:20,
   marginTop:'100%',
   marginLeft:'5%',
  },
  AddIconStyling:{
    textAlign:'center',
    marginTop:'20%',
    tintColor:'grey'
  }
});

export default Index;
