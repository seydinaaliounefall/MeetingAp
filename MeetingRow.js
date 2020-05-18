import React from 'react'
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { Icon, Card } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'

var widthWin = Dimensions.get('window').width; //full width
var heightWin = Dimensions.get('window').height; //full height
const shadow = {
  shadowColor: '#30C1DD',
  shadowRadius: 10,
  shadowOpacity: 0.6,
  elevation: 8,
  shadowOffset: {
    width: 0,
    height: 4
  }
}

export default class MeetingRow extends React.Component {

  constructor(props){
    super(props);
    this.navigation = props.navigation;
    this.state = {date:this.date}
  }

  onItemClick = () => {
    console.log('onItemClick');
    this.navigation.navigate('Detail', {
      image: this.props.image,
      sujet: this.props.sujet,
      date: this.props.date,
      heure: this.props.heure,
      min:this.props.min,
      sec:this.props.sec,
      participant:this.props.participant
    })
  }
  

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onItemClick}>
      
      <View style={styles.main_container}>
      
      <View style={styles.content_container}>
        
        <View style={styles.header_container}>
       
        <Text style={styles.title_text}><Text style={styles.title_sujet}>Sujet</Text>:  {this.props.sujet}</Text>
        <Text style={styles.time_text}>Heure: {this.props.heure}:{this.props.min}:{this.props.sec}</Text>
        </View>
        <View style={styles.description_container}>
          <Text style={styles.det}>Appuyer sur l'icone du calendrier</Text>
          <DatePicker
            style={{width: 200}}
            color= '#fff'
            date={this.props.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate={this.props.date}
            maxDate={this.props.date}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }}}
          onDateChange={(date) => {this.setState({date: date})}}
          />

          
        </View>
        <View style={styles.date_container}>
          <Text style={styles.detail}>Appuyez pour voir les détails svp</Text>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}
}


const styles = StyleSheet.create({
  boxShadow: {
    width: widthWin - 600,
    height:heightWin - 1070,
    borderRadius: 10,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    margin: 5,
    shadowOpacity: 3
  },
main_container: {
  backgroundColor: 'white',
  //height: heightWin - 1500,
  flexDirection: 'row',
  marginRight: widthWin - 10,
  width: widthWin,
  
},
image: {
  width: 100, 
     height: 100, 
     borderRadius: 25, 
     marginRight: 18 
},
content_container: {
 
  flex: 1,
  margin: 7,
  borderRadius: 15,
  backgroundColor: '#DCF2F2',
  marginLeft: 15,
  marginRight: 15,
 
},
header_container: {
  flex: 3,
  flexDirection: 'row',
},
title_text: {
  color: 'black',
  fontWeight: 'bold',
  fontSize: 20,
  flex: 1,
  flexWrap: 'wrap',
  paddingRight: 5,
  color:  'black'
},
title_sujet: {
 fontStyle: 'italic',
 fontSize: 23,
 color: 'black'
},
time_text: {
  fontWeight: 'bold',
  fontSize: 26,
  color: 'black'
},
description_container: {
  flex: 7
},
description_text: {
  fontStyle: 'italic',
  color: 'black'
},
date_container: {
  flex: 1
},
detail: {
  textAlign: 'right',
  fontSize: 14,
  color : 'black'
},
det :{
  color: 'black',
  fontStyle:'italic'
}
})