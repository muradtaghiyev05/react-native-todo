import { Button, FlatList, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals( currentGoals => [ ...currentGoals, { text: enteredGoal, id: Math.random().toString() } ]);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button onPress={() => setModalVisible(true)} title='Add New Goal' color='#5e0acc' />
      <GoalInput showModal={modalVisible} setModalVisible={setModalVisible} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteItem={deleteGoalHandler} />
            )
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
