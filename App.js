import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Text } from "react-native";

const App = () => {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);
  return (
    <View style={styles.mainView}>
      <View style={styles.view}>
        <TextInput
          placeholder={"Cel kursu"}
          value={text}
          onChangeText={(value) => setText(value)}
          style={styles.textInput}
        />
        <Button
          title="Dodaj"
          onPress={() => {
            setGoals([...goals, text]);
            setText("");
          }}
        />
      </View>
      <View>
        {goals.map((goal, id) => (
          <Text key={id} style={styles.text}>
            {id + 1}. {goal}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    padding: 50,
  },
  view: {
    flexDirection: "row",
  },
  textInput: {
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  text: {
    padding: 10,
  },
});

export default App;
