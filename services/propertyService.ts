import { collection, addDoc, getDocs, orderBy, query, deleteDoc, doc, updateDoc, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from './firebaseConfig';
import { Property } from '../types';

export const propertyService = {
  generateItemCode(): string {
    return `PJ-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
  },

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
        approved: propertyData.approved !== undefined ? propertyData.approved : true,
        itemCode: propertyData.itemCode || this.generateItemCode(),
        createdAt: new Date().toISOString()
      });

      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  },

  async getProperties(onlyApproved: boolean = false): Promise<Property[]> {
    const propertiesCol = collection(db, 'properties');
    const q = query(propertiesCol, orderBy('createdAt', 'desc'));
    const propertySnapshot = await getDocs(q);
    
    const allProperties = propertySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Property));

    if (onlyApproved) {
      // Retornar solo los aprobados explícitamente O aquellos que no tengan el campo (inmuebles antiguos)
      return allProperties.filter(p => p.approved !== false);
    }

    return allProperties;
  },

  async deleteProperty(id: string): Promise<void> {
    try {
      await deleteDoc(doc(db, 'properties', id));
    } catch (e) {
      console.error("Error deleting document: ", e);
      throw e;
    }
  },

  async approveProperty(id: string): Promise<void> {
    try {
      const docRef = doc(db, 'properties', id);
      await updateDoc(docRef, { approved: true });
    } catch (e) {
      console.error("Error approving document: ", e);
      throw e;
    }
  }
};
