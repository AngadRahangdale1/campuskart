import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';

import { subscribeToAuthChanges } from '../services/auth';
import { useAuthStore } from '../store/useAuthStore';

export default function RootLayout() {
  const router = useRouter();
  const { setUser, setLoading } = useAuthStore();

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((user) => {
      setUser(user);
      setLoading(false);
      router.replace(user ? '/tabs/home' : '/auth/login');
    });

    return unsubscribe;
  }, [router, setLoading, setUser]);

  return <Stack screenOptions={{ headerShown: false }} />;
}