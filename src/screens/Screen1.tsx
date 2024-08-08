import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { RootStachParams } from '../navigator/StackNavigator';
import { styles } from '../theme/apptheme';

interface Props extends StackScreenProps<RootStachParams, 'Screen1'> { };

export const Screen1 = ({ navigation }: Props) => {
    const Stack = createStackNavigator();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido</Text>
            <View style={styles.contentButton}>
                <TouchableOpacity
                    style={{ ...styles.buttonParams, backgroundColor: '#ee8816' }}
                    onPress={() => navigation.navigate('Screen2')}>
                    <Text style={styles.text}>Imagen 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ ...styles.buttonParams, backgroundColor: '#ee8816' }}
                    onPress={() => navigation.navigate('Screen3')}>
                    <Text style={styles.text}>Imagen 2</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentButton}>
                <TouchableOpacity
                    style={{ ...styles.buttonParams, backgroundColor: '#ee8816' }}
                    onPress={() => navigation.navigate('Screen4')}>
                    <Text style={styles.text}> {'>'}=</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ ...styles.buttonParams, backgroundColor: '#ee8816' }}
                    onPress={() => navigation.navigate('Screen5')}>
                    <Text style={styles.text}>{'<'}=</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}
