import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function Sell() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    if (!title || !price) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    Alert.alert('Coming soon', 'Listing creation will be connected to Firestore next');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sell an Item</Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Post Listing</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12 },
  button: { backgroundColor: '#000', padding: 14, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
});