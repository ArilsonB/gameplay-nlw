import React from 'react';

import {
  View, Text, Alert
} from 'react-native';
import { Button } from '../../components/Button';
import { ButtonOut } from '../../components/ButtonOut';
import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

type Props = {
  closeModal?: () => void;
}

export function SignOut({ closeModal }: Props) {
  const { signOut } = useAuth();


  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>Deseja sair do GamePlay?</Text>
      </View>
      <View style={styles.buttonArea}>
        <ButtonOut title="Não" onPress={closeModal} style={{ marginRight: 8 }} />
        <ButtonOut title="Sim" onPress={handleSignOut} isColored />
      </View>
    </View>
  );
}