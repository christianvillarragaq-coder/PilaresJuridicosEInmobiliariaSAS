import { collection, addDoc, getDocs, orderBy, query } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from './firebaseConfig';
import { Property } from '../types';

export const propertyService = {
  async addProperty(propertyData: Omit<Property, 'id'>, images: File[], videoFile?: File): Promise<string> {
    try {
      const imageUrls: string[] = [];
      
      for (const image of images) {
        const imageRef = ref(storage, `properties/${Date.now()}_${image.name}`);
        const snapshot = await uploadBytes(imageRef, image);
        const url = await getDownloadURL(snapshot.ref);
        imageUrls.push(url);
      }

      let videoUrl = propertyData.videoUrl || '';
      if (videoFile) {
        const videoRef = ref(storage, `properties/videos/${Date.now()}_${videoFile.name}`);
        const snapshot = await uploadBytes(videoRef, videoFile);
        videoUrl = await getDownloadURL(snapshot.ref);
      }

      const docRef = await addDoc(collection(db, 'properties'), {
        ...propertyData,
        imageUrls,
        image: imageUrls.length > 0 ? imageUrls[0] : propertyData.image || '',
        videoUrl: videoUrl,
        createdAt: new Date().toISOString()
      });

      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  },

  async getProperties(): Promise<Property[]> {
    const propertiesCol = collection(db, 'properties');
    const q = query(propertiesCol, orderBy('createdAt', 'desc'));
    const propertySnapshot = await getDocs(q);
    return propertySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Property));
  }
};
