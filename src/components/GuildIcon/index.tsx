import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://logosmarcas.net/wp-content/uploads/2020/12/Discord-Logo-650x366.png';

  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover" />
  );
}