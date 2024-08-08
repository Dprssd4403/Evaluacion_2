import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { styles } from '../theme/apptheme'
import { InputComponent } from '../components/InputComponent'

export const Screen4 = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [mostrarResultado, setMostrarResultado] = useState('');

    const mayorIgual = () => {
        if (num1 > num2) {
            setMostrarResultado('El numero mayor es: ' + ' ' + num1)
        } else if (num1 < num2) {
            setMostrarResultado('El numero mayor es: ' + ' ' + num2)
        } else if (num1 === num2) {
            setMostrarResultado('Los numeros son iguales')
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>FORMULARIO</Text>
            <TextInput
                style={styles.botones}
                value={num1}
                onChangeText={setNum1}
                placeholder="Campo 1: número" />
            <TextInput
                style={styles.botones}
                value={num2}
                onChangeText={setNum2}
                placeholder="Campo 2: número" />
            <View>
                <Button title='>=' onPress={mayorIgual} />
                {mostrarResultado
                    ? <Text style={styles.resultado}>{mostrarResultado}</Text>
                    : null}
            </View>
        </View>
    )
}
