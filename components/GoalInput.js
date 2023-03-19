import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native"


const GoalInput = ({ onAddGoal, setModalVisible, showModal }) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const onAddGoalHandler = () => {
      onAddGoal(enteredGoal);
      setModalVisible(false);
    };

  return (
    <Modal visible={showModal} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput} 
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={onAddGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    image: {
      width: 100,
      height: 100,
      margin: 10,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '80%',
        marginRight: 8,
        padding: 8,
    },
    buttonContainer: {
      flexDirection: 'row',
      gap: 10
    },
    button: {
      width: '30%',
      marginHorizontal: 8,
    }
})

export default GoalInput