import React from 'react'
import { Text, TextInput } from 'react-native'
import { styles } from '../theme/apptheme';

interface Props {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
}

export const InputComponent = ({ value, onChangeText, placeholder }: Props) => {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType='numeric'
        />
    )
}
