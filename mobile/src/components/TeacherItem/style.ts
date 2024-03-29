import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e6e6f0",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#eee",
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: "ArchivoBold",
    color: "#32264d",
    fontSize: 20,
  },

  subject: {
    fontFamily: "PoppinsRegular",
    color: "#616180",
    fontSize: 12,
    marginTop: 4,
  },

  bio: {
    marginHorizontal: 24,
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    lineHeight: 24,
    color: "#6A6190",
  },

  footer: {
    backgroundColor: "#Fafafc",
    padding: 24,
    alignItems: "center",
    marginTop: 24,
  },

  price: {
    fontFamily: "PoppinsRegular",
    color: "#6a6180",
    fontSize: 14,
  },

  priceValue: {
    fontFamily: "ArchivoBold",
    color: "#8257e5",
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: "row",
    padding: 16,
  },

  favorited: {
    backgroundColor: "#e33d3d",
  },

  favoriteButton: {
    backgroundColor: "#8257e5",
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  contactButton: {
    backgroundColor: "#04d361",
    flex: 1,
    flexDirection: "row",
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  contactButtonText: {
    color: "#FFF",
    fontFamily: "ArchivoBold",
    fontSize: 16,
    marginLeft: 16,
  },
});

export default styles;
