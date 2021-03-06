import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.allText}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>

        <Text style={styles.displayText}>
          1) "ππ·π΄ π±πΎπ ππ·πΎ π²ππΈπ΄π³ ππΎπ»π΅" : moral-stories-the-boy-who-cried-wolf
        </Text>
        <Text style={styles.displayText}>
        2) "ππ·π΄ π»πΈπΎπ½ π°π½π³ ππ·π΄ πΌπΎπππ΄" : moral-stories-the-lion-and-the-mouse
        </Text>
        <Text style={styles.displayText}>
        3) "π±π΄π»π»πΈπ½πΆ ππ·π΄ π²π°π" : moral-stories-belling-the-cat
        </Text>
         <Text style={styles.displayText}>
        4) "ππ·π΄ ππΎπππΎπΈππ΄ π°π½π³ ππ·π΄ π·π°ππ΄" : moral-stories-the-tortoise-and-the-hare
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: 'lightgreen',
    flex: 1,
    fontFamily: 'comic sans ms',
  },
  header: {
    backgroundColor: 'blue',
    border: 'dashed',
  },
  headerText: {
    fontFamily: 'Eras Bold ITC',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  displayText: {
    fontFamily: 'Eras Bold ITC',
    fontSize: 20,
    padding: 15,
  },
});
