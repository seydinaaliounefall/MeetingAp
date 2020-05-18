import React from 'react';
import { 
  StyleSheet, Text, 
  View, Image, TextInput, 
  Dimensions, TouchableOpacity, navigation } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

var widthWin = Dimensions.get('window').width; //full width
var heightWin = Dimensions.get('window').height; //full height

export default class DetailMeeting extends React.Component {

  constructor(props) {
    super(props);
    this.sujet = props.route.params.sujet;
    this.image = props.route.params.image;
    this.participant = props.route.params.participant;
    this.date = props.route.params.date;
    this.heure = props.route.params.heure;
    this.min = props.route.params.min;
    this.sec = props.route.params.sec;
   
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: this.image,
          }}
          />
        <View>
        <Text style={styles.text}>
            <Text style={styles.title}>Sujet: </Text>
              <Text>  {this.sujet} </Text>
        </Text>
        </View>
        <View style={styles.calendar}>
            <Calendar
                // Initially visible month. Default = Date()
                current={this.date}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                hideExtraDays={false}
                minDate={this.date}
                maxDate={this.date}
                markedDates={this.day}
                />
        </View>
        <Text style={styles.text}>
            <Text style={styles.title}>Heure: </Text>
              <Text>  {this.heure}H {this.min}min  </Text>
        </Text>
   

        <Text style={styles.text}>
            <Text style={styles.title}>Participant: </Text>
              <Text style={styles.part}> {this.participant}</Text>
            </Text>

        <TouchableOpacity
          style={styles.buttonSave}>
          <Text style={styles.buttonText} onPress={() => navigation.NavigationContainer('DetailMeeting')} >Modifier</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDelete}>
          <Text style={styles.buttonText} onPress={() => navigation.NavigationContainer('DetailMeeting')} >Supprimer</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F5',
    alignItems: 'center',
  },

  image: {
    marginTop: 30,
    width: widthWin - 570,
    height: heightWin - 1010,
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
  text : {
    marginTop: 30,
    fontSize: 30,
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
  title:{
    textShadowColor:'#FF80AB',
    fontStyle: 'italic',
    textDecorationStyle: 'double',
    textDecorationLine: 'underline',
    fontFamily: '',
  },
  buttonSave: {
    marginTop: 10,
    backgroundColor: '#13F20B',
    borderRadius: 20,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: widthWin - 650,

  },
  buttonDelete: {
    marginTop: 10,
    backgroundColor: '#F31515',
    borderRadius: 20,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: widthWin - 650,

  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  },
  calendar: {
      width : widthWin - 100,
      fontSize: 20
  },
  part:{
    fontSize: 20
  }
});
