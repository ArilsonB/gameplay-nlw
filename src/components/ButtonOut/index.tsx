import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text, Pressable, PressableProps } from 'react-native';

import { styles } from './styles';

type Props = PressableProps & {
  title: string;
  isColored?: boolean;
  style?: Object
}

export function ButtonOut({ title, isColored = false, style = {}, ...rest }: Props) {
  return (
    <Pressable
      style={[style, styles.container]}
      {...rest}>
      <View style={isColored ? styles.contentColored : styles.content}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
}