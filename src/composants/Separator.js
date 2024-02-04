import { View } from "react-native-web";


const Separator = (props) => {
    return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Separator;