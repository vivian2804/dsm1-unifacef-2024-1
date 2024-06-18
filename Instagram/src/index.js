import React from 'react'
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native'
import styles from './styles'

const TelaLogin = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./src/logo.png')} 
      />
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário ou e-mail"
        
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signupText}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TelaLogin;
