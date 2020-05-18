import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  StyleSheet} from 'react-native';
import ListMeeting from './ListMeeting';
import DetailMeeting from './DetailMeeting';
import AddMeeting from './AddMeeting';
import { App } from "./App";

const Stack = createStackNavigator();

export default class Index extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name= "Accueil" component={App}/>
>          <Stack.Screen name="List meeting" component={ListMeeting} />
          <Stack.Screen name="Detail" component={DetailMeeting} />
          <Stack.Screen name="Add" component={AddMeeting} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({

});
