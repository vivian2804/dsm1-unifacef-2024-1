import { View, Text, Button } from 'react-native'
import styles from "./style"

export default function SobreMim({navigation}){

    return(

        <View style={styles.container}> 
            <Text> Vivian Almeida Silva</Text>
            <Text> vivian.almeida28@yahoo.com.br</Text>
            <Text> 16 99209-2450</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()}></Button>
        </View>
        )
    }