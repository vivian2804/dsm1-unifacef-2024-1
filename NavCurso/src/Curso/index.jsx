import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles'

export default function Curso({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Curso</Text>
      <Text>Nome do Curso: Sistemas de Informação</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}
