import React from "react";
import { View  , StyleSheet , Text, TouchableOpacity} from "react-native";
const Tasks = (props) =>{
  return(
     <View style={styles.taskContainer}>
        <View style={styles.checkBoxContainer}>
           <TouchableOpacity style={styles.checkBox} />
           <Text style={styles.taskItem}>{props.text}</Text>
        </View>
        
       <TouchableOpacity style={styles.RadioBtn} >
           
       </TouchableOpacity>
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
        justifyContent:'space-between',

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
        marginLeft:'6%',
        fontSize:20,
        marginTop:'7%',
       
    },
    checkBoxContainer:{
      flexDirection:'row'
    },
    RadioBtn:{
       width :20,
       height:20,
      borderColor:'#55BCF6',
       borderRadius:30,
       marginTop:"2%",
       borderWidth:2,
       marginTop:"4%"
    }
});
export default Tasks;   