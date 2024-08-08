import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/apptheme'

export const Screen3 = () => {
  return (
    <View>
        <Image
        style={styles.image}
        source={{
            uri: 'https://bambu-mobile.com/wp-content/uploads/2023/01/category-banner-apps-moviles.jpg'
        }}
        />
    </View>
  )
}