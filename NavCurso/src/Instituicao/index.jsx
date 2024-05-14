import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles'

export default function Instituicao({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Uni-FACEF</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}
