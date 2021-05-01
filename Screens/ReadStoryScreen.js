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
          1) "🅃🄷🄴 🄱🄾🅈 🅆🄷🄾 🄲🅁🄸🄴🄳 🅆🄾🄻🄵" : moral-stories-the-boy-who-cried-wolf
        </Text>
        <Text style={styles.displayText}>
        2) "🅃🄷🄴 🄻🄸🄾🄽 🄰🄽🄳 🅃🄷🄴 🄼🄾🅄🅂🄴" : moral-stories-the-lion-and-the-mouse
        </Text>
        <Text style={styles.displayText}>
        3) "🄱🄴🄻🄻🄸🄽🄶 🅃🄷🄴 🄲🄰🅃" : moral-stories-belling-the-cat
        </Text>
         <Text style={styles.displayText}>
        4) "🅃🄷🄴 🅃🄾🅁🅃🄾🄸🅂🄴 🄰🄽🄳 🅃🄷🄴 🄷🄰🅁🄴" : moral-stories-the-tortoise-and-the-hare
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
