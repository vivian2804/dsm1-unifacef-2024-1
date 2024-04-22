import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Baskara = () => {
  const [coeficientes, setCoeficientes] = useState({ a: '', b: '', c: '' });  // armazena os coeficientes da equação (a, b, c). O setCoeficientes é usado para atualizar o estado da variável
  const [resultado, setResultado] = useState('');

  const calculo = () => {
    const { a, b, c } = coeficientes;  //declaração dos coeficientes e do valor de delta
    const delta = b ** 2 - 4 * a * c;

    if (delta < 0) {
      setResultado('O resultado é negativo, logo não tem raiz'); // Se o delta for menor que 0, então apresenta a mensagem. Se for maior, realiza a forma de Báskara com as raízes
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      setResultado(`x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`);  //deixa o número com duas casas decimais
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Equação do 2º Grau: ax² + bx + c = 0</Text>
      {['a', 'b', 'c'].map((coeficiente) => ( // a função map vai mapear os coeficientes e criar um input para cada um
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
          placeholder={`Valor de ${coeficiente}`}
          keyboardType="numeric"
          onChangeText={(text) => setCoeficientes({ ...coeficientes, [coeficiente]: parseFloat(text) })}
          value={coeficientes[coeficiente].toString()}
        />
        //botão para iniciar o cálculo
      ))}
      <Button title="Resultado do cálculo das raízes" onPress={calculo} /> 
      <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Resultado:</Text>
      <Text>{resultado}</Text>
    </View>
  );
};

export default Baskara;
