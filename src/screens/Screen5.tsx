import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { styles } from '../theme/apptheme'


export const Screen5 = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [mostrarResultado, setMostrarResultado] = useState('');

    const menorIgual = () => {
        if (num1 > num2) {
            setMostrarResultado('El numero 2 es menor')
        } else if (num1 < num2) {
            setMostrarResultado('El numero 1 es menor')
        } else if (num1 === num2) {
            setMostrarResultado('Los numeros son iguales')
        }
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>FORMULARIO</Text>
                <TextInput
                    style={styles.botones}
                    value={num1}
                    onChangeText={setNum1}
                    placeholder="Número 1: " />
                <TextInput
                    style={styles.botones}
                    value={num2}
                    onChangeText={setNum2}
                    placeholder="Número 2: " />
                <View>
                    <Button title='>=' onPress={menorIgual} />
                    {mostrarResultado
                        ? <Text style={styles.resultado}>{mostrarResultado}</Text>
                        : null}
                </View>

            </View>

        </View>
    )
}