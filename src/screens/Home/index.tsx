import React, { useState, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentsProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';

import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { ModalView } from '../../components/ModalView';
import { SignOut } from '../SignOut';

export function Home() {
  const [category, setCategory] = useState('');
  const [appointments, setAppointments] = useState<AppointmentsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [outModal, setOutModal] = useState(false);

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected: AppointmentsProps) {
    navigation.navigate('AppointmentDetails', { guildSelected });
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  function handleCloseModal() {
    setOutModal(false);
  }

  function handleOpenModal() {
    setOutModal(true);
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

    const storage: AppointmentsProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter(item => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]))

  return (
    <Background>
      <View style={styles.header}>
        <Profile openModal={handleOpenModal} />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={setCategory}
      />
      {
        loading ? <Load /> :
          <>
            <ListHeader
              title="Partidas agendadas"
              subtitle={`Total ${appointments.length}`} />
            <FlatList
              data={appointments}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Appointment
                  data={item}
                  onPress={() => handleAppointmentDetails(item)} />
              )}
              ItemSeparatorComponent={() => <ListDivider />}
              contentContainerStyle={{ paddingBottom: 69 }}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
            />
          </>
      }
      <ModalView signOutModal visible={outModal} closeModal={handleCloseModal}>
        <SignOut closeModal={handleCloseModal} />
      </ModalView>
    </Background>
  );
}