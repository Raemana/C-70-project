import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WriteStory from './screens/WriteStory';
import ReadStory from './screens/ReadStory';
import {createBottomTabNavigator} from 'react-navigation-tabs';
export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}
const TabNavigator = createBottomTabNavigator({
  WriteStory:WriteStory, ReadStory:ReadStory
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName
      if(routeName=='WriteStory'){
        return(
        <Image source={require('')}
        style={{width:40,height:50}}/>
        )}
      else if(routeName=='ReadStory'){
        return(
        <Image source={require('')}
        style={{width:40,height:50}}/>
         ) }
    }
  })
}
)
const AppContainer=createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
