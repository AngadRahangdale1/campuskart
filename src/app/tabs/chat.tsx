import { View, Text, StyleSheet } from 'react-native';

export default function Chat() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <Text style={styles.empty}>No conversations yet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: '700', marginTop: 12, marginBottom: 20 },
  empty: { textAlign: 'center', marginTop: 40, color: '#999' },
});