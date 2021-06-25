import React, { ReactNode } from 'react';
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';
import { Background } from '../Background';

import { styles } from './styles';

type Props = ModalProps & {
  signOutModal?: boolean;
  children: ReactNode;
  closeModal: () => void;
}

export function ModalView({ signOutModal = false, children, closeModal, ...rest }: Props) {
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={signOutModal ? styles.overlayTwo : styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}