import { Text, View, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
const Comment = ({ author, text, date }) => {
  const state = useSelector((state) => state.auth);
  const isOwner = author === "Natali Romanova";

  if (!isOwner) {
    return (
      <View style={styles.commentContainer}>
        <Image
          style={styles.img}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5IMlPUgreOx1p_Pxp9iVb7ivXO1LKodsoIBo9UnKjuHZlBcLO37enqghlYyzmRARo-5I&usqp=CAU",
          }}
        />
        <View style={styles.commentTextContainer}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.commentContainer}>
      <View style={styles.commentOwnerTextContainer}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.dateOwner}>{date}</Text>
      </View>
      <Image style={styles.img} source={require(".//..//images/avatar.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 24,
  },
  img: {
    borderRadius: 50,
    width: 28,
    height: 28,
  },
  commentTextContainer: {
    width: 299,
    height: "auto",
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
  },
  commentOwnerTextContainer: {
    width: 299,
    height: "auto",
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 0,
  },
  text: {
    color: "rgba(33, 33, 33, 1)",
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: 400,
    marginBottom: 8,
  },
  date: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 10,
    fontFamily: "Roboto",
    fontWeight: 400,
    alignSelf: "flex-end",
  },
  dateOwner: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 10,
    fontFamily: "Roboto",
    fontWeight: 400,
    alignSelf: "flex-start",
  },
});

export default Comment;
