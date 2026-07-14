import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { logout } from '../../services/auth';
import { useAuthStore } from '../../store/useAuthStore';

export default function Profile() {
  const { user } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err: any) {
      Alert.alert('Error', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.email}>{user?.email}</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  title: { fontSize: 24, fontWeight: '700', marginTop: 12 },
  email: { fontSize: 16, color: '#666', marginBottom: 20 },
  button: { backgroundColor: '#c00', padding: 14, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
});