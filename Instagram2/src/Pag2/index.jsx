import { View, Text, Button, Image } from 'react-native'
import styles from "./styles" 

export default function Pag2({navigation}){

    return(

        <View style={styles.container}> 
            <Image source={require('./imagem/first.png')} styles={styles.image}/>
            <Image source={require('./imagem/second.png')} styles={styles.image} />
            <Image source={require('./imagem/third.png')} styles={styles.image} />
            <Button title="Voltar" onPress={() => navigation.goBack()}></Button>
        </View>
        )
    }