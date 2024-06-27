import { View, Text, Button } from 'react-native'
import styles from "./style" 

export default function MeuApp({navigation}){  //style é uma lista, o contaier é só um tópico da lista

    return(
        <View style={styles.container}> 
            <Text>
                Meu App
            </Text>
            <Button title="Sobre Mim" onPress={() => navigation.navigate('SobreMim')}></Button>
            <Button title="Curso" onPress={() => navigation.navigate('Curso')}></Button>
            <Button title="Instituicao" onPress={() => navigation.navigate('Instituicao')} ></Button>
        </View>
    )
}