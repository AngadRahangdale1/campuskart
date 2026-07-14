import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'expo-router';
import { login } from '../../services/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await login(email, password);
    } catch (err: any) {
      Alert.alert('Login Failed', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24, gap: 12 }}>
      <Text style={{ fontSize: 28, fontWeight: '700', marginBottom: 16 }}>CampusKart</Text>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12 }}
      />
      <TouchableOpacity
        onPress={handleLogin}
        disabled={loading}
        style={{ backgroundColor: '#000', padding: 14, borderRadius: 8, alignItems: 'center' }}
      >
        <Text style={{ color: '#fff', fontWeight: '600' }}>
          {loading ? 'Logging in...' : 'Login'}
        </Text>
      </TouchableOpacity>
      <Link href="/auth/signup" style={{ textAlign: 'center', marginTop: 12 }}>
        New here? Sign up
      </Link>
    </View>
  );
}