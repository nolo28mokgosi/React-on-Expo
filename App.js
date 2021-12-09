import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import GoalInputModal from './components/GoalInputModal';

export default function App() {

 
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)
  
  
  const addGoalHandler = goalTitle => 
  {
    //setCourseGoals([...courseGoals, enteredGoal]) not guaranteed to have latest, use below
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: goalTitle}]);
      setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelGoalAddingHandler = () =>{
    setIsAddMode(false);
  }


  return (
    <View style={styles.screen}>
      <Button title="Add Modal" onPress={() => setIsAddMode(true)}/>
      <GoalInputModal visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddingHandler}/>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item,index) => item.id}
        data={courseGoals} 
        renderItem={itemData => <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeGoalHandler} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50
  },
 
});
