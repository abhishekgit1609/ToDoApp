import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeTasksToStorage = async(taskItems)=>{
  try{
   console.log('Saving tasks to storage-->' , taskItems);
     const jsonValue = JSON.stringify(taskItems);
     console.log('Json value of stored tasks --->' , jsonValue);
     await AsyncStorage.setItem('taskItems',jsonValue);
  }
  catch(e){
    console.log('Failed to save tasks!');
  }
}

export const loadTaskFromStorage = async()=>{
   try{
      const jsonValue = await AsyncStorage.getItem('taskItems');
      console.log('Loading tasks from storage-->' , jsonValue);
      return jsonValue !=null ? JSON.parse(jsonValue) : [];
   }
   catch(e){
    console.log('failed to load tasks');
    return[];
   }
}