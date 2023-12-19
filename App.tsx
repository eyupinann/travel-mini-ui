import { StyleSheet} from "react-native";
import Router from "./router";

export default function App() {
  return <Router />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
