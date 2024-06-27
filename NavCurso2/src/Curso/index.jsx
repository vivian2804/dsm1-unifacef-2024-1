import { View, Text, Button } from 'react-native'
import styles from "./style" 

export default function Curso({navigation}){

    return(

    <View style={styles.container}> 
        <Text>Sistemas de Informação</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()}></Button>
    </View>
    )
}