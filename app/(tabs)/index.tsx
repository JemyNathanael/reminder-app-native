import React, { useState } from 'react';
import { Text, Button, FlatList, TextInput, View } from 'react-native';

export default function ReminderList() {
  const [reminders, setReminders] = useState(['']);
  const [newReminder, setNewReminder] = useState('');

  const addReminder = () => {
    if (newReminder.trim()) {  // Avoid adding empty reminders
      setReminders([...reminders, newReminder]);
      setNewReminder('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Add a reminder"
        value={newReminder}
        onChangeText={setNewReminder}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
      />
      <Button title="Add Reminder" onPress={addReminder} />
      <FlatList
        data={reminders}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
