import React from "react";
import { View  , StyleSheet , Text, TouchableOpacity} from "react-native";
const Tasks = () =>{
  return(
     <View style={styles.taskContainer}>
        <View style={styles.checkBoxContainer}>
           <TouchableOpacity style={styles.checkBox} />
        </View>
        <Text style={styles.taskItem}>Tasks</Text>
        <View style={styles.checkBoxContainer}>
           <TouchableOpacity style={styles.RadioBtn} />
        </View>
     </View>
  );
}
const styles = StyleSheet.create({  
    taskContainer:{
        backgroundColor:'white',
        padding:20,
        borderRadius:10,
        marginBottom:20,
        margin:20,
        flexDirection:'row',
    },
    checkBox:{
        width:24,
        height:24,
        borderRadius:5,
        borderWidth:2,
        marginTop:'10%',
        borderColor:'#55BCF6',
        backgroundColor:'#55BCF6'
    },
    taskItem:{
        marginLeft:10,
        fontSize:20,
    },
    RadioBtn:{
        width:15,
        height:15,
        borderRadius:12,
        borderWidth:2,
        marginLeft:'80%',
        marginTop:"2%",
        borderColor:'#55BCF6',
        
    }
});
export default Tasks;   