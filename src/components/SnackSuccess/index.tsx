import { StyleSheet, Text, View } from "react-native";
import { Snackbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

type SnackProps = {
  visible: boolean;
  setVisible: Function;
  text: string;
};

export default function SnackSuccess({ visible, setVisible, text }: SnackProps) {
  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <Snackbar
      wrapperStyle={styles.container}
      style={styles.snackbar}
      visible={visible}
      onDismiss={onDismissSnackBar}
      action={{
        label: "Ok",
        color: "#fdfdfd",
        onPress: () => {
        },
      }}
    >
      <View style={styles.content}>
        <Ionicons
          name="checkmark-done-circle-outline"
          size={24}
          color="white"
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </Snackbar>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    zIndex: 1,
    maxHeight: 100,
  },
  snackbar: {
    color: "#fdfdfd",
    backgroundColor: "#15bb1e",
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    color: "#fdfdfd",
    paddingLeft: 10,
  },
});
