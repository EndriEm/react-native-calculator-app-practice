import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [result, setResult] = useState("0");
  const [expression, setExpression] = useState("");

  const handleButtonPress = (input) => {
    if (input === "=") {
      try {
        const evalResult = eval(expression);
        setResult(evalResult.toString());
        setExpression(evalResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (input === "C") {
      setResult("0");
      setExpression("");
    } else {
      setExpression((prevExpression) => prevExpression + input);
    }
  };

  const renderButtons = () => {
    const buttons = [
      ["7", "8", "9", "/"],
      ["4", "5", "6", "*"],
      ["1", "2", "3", "-"],
      ["C", "0", "=", "+"],
    ];

    return buttons.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((button) => (
          <TouchableOpacity
            key={button}
            style={styles.button}
            onPress={() => handleButtonPress(button)}
          >
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <Text style={styles.expression}>{expression}</Text>
      {renderButtons()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },
  result: {
    fontSize: 48,
    textAlign: "right",
    marginBottom: 24,
  },
  expression: {
    fontSize: 24,
    textAlign: "right",
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#DDDDDD",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    borderRadius: 8,
    margin: 4,
  },
  buttonText: {
    fontSize: 24,
  },
});
