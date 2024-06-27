import { View, Text, Button, Image } from 'react-native'
import styles from "./style" 

export default function Instituicao({navigation}){

    return(
        <View style={styles.container}> 
            <Image source={require('./imagem/SI.jpg')} style={styles.image} />
            <Text> Uni-Facef </Text>
            <Button title="Voltar" onPress={() => navigation.goBack()}></Button>
        </View>

    )
}