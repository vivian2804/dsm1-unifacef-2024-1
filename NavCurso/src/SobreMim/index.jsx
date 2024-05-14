import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles'

export default function SobreMim({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Sobre Mim</Text>
      <Text>Nome: Vivian</Text>
      <Text>Telefone: 16 99209-2450</Text>
      <Text>Email: vivian.almeida28@yahoo.com.br</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}
