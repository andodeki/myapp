// @solid
import { View, Text } from 'react-native'
// import React from 'react'
import {
    createEffect,
    createStore,
    For,
    onMount,
    SetStoreFunction,
    Store,
  } from "solid-native";
// import {  View } from '@showtime-xyz/universal.view';
// import {  Text } from '@showtime-xyz/universal.text';
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen