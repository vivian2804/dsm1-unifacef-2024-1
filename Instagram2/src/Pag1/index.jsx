import { View, Text, Button, Image, TextInput } from 'react-native'
import styles from "./styles" 

export default function Pag1({navigation}){

    return(

        <View styles={styles.container}> 
            <Image source={require('./imagem/logo.png')} styles={styles.image} />
            
            <TextInput styles={styles.input}
                placeholder="Nome de usuário, email ou número de telefone"/>
            <TextInput styles={styles.input}
                placeholder="Senha"/>
            
            <Button title="Entrar" onPress={() => navigation.navigate('Pag2')}></Button>
            <Button title="Esqueceu a senha?"></Button>
            <Button title="Criar nova conta"></Button>
            <Image source={require('./imagem/meta2.jpg')} styles={styles.image} />
        </View>
        )
    }