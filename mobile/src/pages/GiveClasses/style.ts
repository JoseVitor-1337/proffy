import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257e5",
    justifyContent: "center",
    padding: 20,
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontFamily: "ArchivoBold",
    color: "#FFF",
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    marginTop: 24,
    color: "#d4c2ff",
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "PoppinsRegular",
    maxWidth: 240,
  },

  okButton: {
    marginHorizontal: 40,
    backgroundColor: "#04d361",
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  okButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "ArchivoBold",
  },
});

export default styles;
