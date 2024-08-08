import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/apptheme'

export const Screen2 = () => {
  return (
    <View>
        <Image
        style={styles.image}
        source={{
            uri: 'https://naps.com.mx/blog/wp-content/uploads/2021/02/tipos-de-aplicaciones-m%C3%B3viles.jpg'
        }}
        />
    </View>
  )
}
