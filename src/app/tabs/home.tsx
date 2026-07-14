import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CampusKart</Text>
      <Text style={styles.subtitle}>Browse listings near you</Text>
      <FlatList
        data={[]}
        renderItem={() => null}
        ListEmptyComponent={
          <Text style={styles.empty}>No listings yet. Be the first to sell!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 28, fontWeight: '700', marginTop: 12 },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 20 },
  empty: { textAlign: 'center', marginTop: 40, color: '#999' },
});

