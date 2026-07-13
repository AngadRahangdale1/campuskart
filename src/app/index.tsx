import { StyleSheet, Text, View } from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.screen}>

      <View style={styles.container}>
        <Text style={styles.title}>Home screen loaded</Text>
        <Text style={styles.subtitle}>
          If you can see this, the route is working.
        </Text>
      </View>

      <View style={styles.card}>
        <Text>Hello, this is a card</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#E6F4FE',
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 100,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0B2D4D',
    textAlign: 'center',
  },

  subtitle: {
    marginTop: 12,
    fontSize: 16,
    color: '#35516B',
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#eee',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 40,

    // Android
    elevation: 4,

    // iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
});