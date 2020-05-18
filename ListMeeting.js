import React from 'react';
import { 
  StyleSheet,
  View, 
  Dimensions, FlatList, Text} from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import MeetingRow from './MeetingRow';
import { Card } from "react-native-elements";
import NavigationBar from 'react-native-navbar';
import RNPickerSelect from 'react-native-picker-select';
import DetailMeeting from "./DetailMeeting";

var widthWin = Dimensions.get('window').width; //full width
var heightWin = Dimensions.get('window').height; //full height

const actions = [
  {
    text: "Ajouter une réunion",
    icon: require("./assets/add_white.png"),
    sujet: "bt_add",
    position: 1
  }
];
/*const rightButtonConfig = {
  title: 'Filtrer',
  handler: () => alert('hello!'),
  icon: require("./assets/filter.png")
};*/
 
const titleConfig = {
  title: 'Bienvenue MeetingManagement',
  
};
 

export default class ListMeeting extends React.Component {

  constructor(props){
    super(props);
    this.navigation = props.navigation;
    this.state = {
      meetings: []
    }
  }

  componentDidMount(){
    console.log('componentDidMount');
    fetch("https://demo8384490.mockable.io/meetingdata")
    .then(response => response.json())
    .then((responseJson)=> {
      console.log('Welcome to the meeting');
      this.setState({
        meetings: responseJson
      })
    })
    .catch(error => console.log(error)) //to catch the errors if any
  }

  render() {
    return (
      
      <View style={styles.container}>
        <NavigationBar

        title={titleConfig}
        /*rightButton={rightButtonConfig}*/
        style={styles.nav}
      />
      <View>
      <Text style={styles.filter_text}>Filtrer Par</Text>
      
      <RNPickerSelect
            title='Order BY'
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Sujet', value: 'sujet', onPressItem: this.navigation.ListMeeting },
                { label: 'Date', value: 'date', onPressItem: this.navigation.DetailMeeting },
            ]}
        />
       </View>
        <FlatList
          style={styles.list}
          data={this.state.meetings}
          renderItem={
            ({item}) => <MeetingRow
            sujet={item.sujet}
            image={item.image}
            date={item.date}
            heure={item.heure}
            min={item.min}
            sec={item.sec}
            participant={item.participant}         
            navigation={this.navigation}
          />
          }
          >
        </FlatList>
        
        <FloatingAction
          actions={actions}
          onPressItem={name => {
            if(name === 'bt_add') {
              this.navigation.navigate('AddMeeting');
            }
          }}
        />
      </View>
    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
   width: widthWin,
    borderRadius: 10
  },

  card: {
    height: heightWin
  },
  nav: {
    backfaceVisibility:'visible',
    backgroundColor :'gray',
    width: widthWin ,
    height : heightWin - 1150,
    backgroundColor : 'white',

  },
  filter_text:{
    fontSize: 20,
    fontStyle: 'italic'
    
  }
});
