import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import App from './index'

const Insta = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <App />
    </SafeAreaView>
  )
}

export default Insta;
