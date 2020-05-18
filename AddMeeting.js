import React from 'react';
import { 
  StyleSheet, Text, 
  View, Image, TextInput, 
  Dimensions, TouchableOpacity } from 'react-native';

var widthWin = Dimensions.get('window').width; //full width
var heightWin = Dimensions.get('window').height; //full height

export default class AddMeeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: this.props.image,
          }}
          />

        <TextInput
          placeholder='Sujet'
          value={this.sujet}
          style={styles.simpleInput}
          />

        <TextInput
          placeholder='Date'
          style={styles.simpleInput}
          />

        <TextInput
          placeholder='Heure'
          style={styles.simpleInput}
          />

        <TextInput
          placeholder='Participant'
          multiline = {true}
          numberOfLines = {3}
          style={styles.textAreaInput}
          />

        <TouchableOpacity
          style={styles.buttonSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

  simpleInput: {
    width: widthWin - 40,
    marginTop: 30,
    height: 40, 
    borderColor: '#FF80AB', 
    paddingHorizontal: 10,
    borderWidth: 1
  },

  textAreaInput: {
    width: widthWin - 40,
    marginTop: 30,
    height: 100, 
    borderColor: '#FF80AB', 
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },

  buttonSave: {
    backgroundColor: '#FF80AB',
    borderRadius: 20,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: 'white'
  }
});
