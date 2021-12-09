import React, {useState}from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
    const [enteredGoal,setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) =>
  {
    setEnteredGoal(enteredText);
  }

    return(
        <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          value={enteredGoal}
          placeholder="Course Goal" 
          style={styles.input}/>
        <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)}/>
        {/* Alternative of above arrow function */}

        {/* <Button title="ADD" onPress={props.onAddGoal.bind(this,enteredGoal)}/>  */}
      </View>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
      },
      input:{
        width:'80%', 
        borderBottomColor: 'black', 
        borderWidth: 1, 
        padding: 10
      },
});

export default GoalInput;