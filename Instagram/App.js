import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import TelaLogin from './index'

const Insta = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <TelaLogin/>
    </SafeAreaView>
  )
}

export default Insta;
