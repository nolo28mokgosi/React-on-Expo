import React, {useState}from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInputModal = props => {
  const [enteredGoal,setEnteredGoal] = useState('')

  const goalInputHandler = (enteredText) =>
  {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('')
  }

  
    return(
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          value={enteredGoal}
          placeholder="Course Goal" 
          style={styles.input}/>
        {/* <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)}/> */}
        {/* Alternative of above arrow function */}
        {/* <Button title="ADD" onPress={props.onAddGoal.bind(this,enteredGoal)}/>  */}
        <View style={styles.buttons}>
          <Button title="Add" onPress={addGoalHandler}/>
          <Button title="cancel" color="red" onPress={props.onCancel}/>
        </View>
      </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent: 'center',
        alignItems:'center',
        flex: 1
      },
      input:{
        width:'80%', 
        borderBottomColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
      },
      buttons:{
        flexDirection: 'row',
        justifyContent:"space-between",
        width: '40%'
      }
});

export default GoalInputModal;