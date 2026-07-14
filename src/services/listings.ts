import { db } from './firebaseConfig';
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';

export interface Listing {
  title: string;
  price: number;
  category: string;
  imageUrl: string;
  sellerId: string;
  createdAt?: any;
}

export const addListing = (data: Omit<Listing, 'createdAt'>) =>
  addDoc(collection(db, 'listings'), { ...data, createdAt: serverTimestamp() });

export const getListings = async () => {
  const q = query(collection(db, 'listings'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};


