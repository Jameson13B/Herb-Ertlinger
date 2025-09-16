import { initializeApp } from "firebase/app"
import {
  getFirestore,
  // arrayUnion,
  // arrayRemove,
  // serverTimestamp,
  query,
  collection,
  orderBy,
  limit,
  startAfter,
  QueryDocumentSnapshot,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore"
import { getStorage, getDownloadURL, ref } from "firebase/storage"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
}

// App instance
const app = initializeApp(firebaseConfig)

// Firestore instance
export const db = getFirestore(app)
const firstQ = (lastVisible?: QueryDocumentSnapshot) =>
  query(
    collection(db, "assets"),
    orderBy("createdAt"),
    startAfter(lastVisible || null),
    limit(9)
  )

export const getConfig = async () => {
  const config = await getDoc(doc(db, "admin", "configs"))
  return config.data()
}

export const getAssets = async (
  lastVisible?: QueryDocumentSnapshot | undefined
) => {
  const snapshots = await getDocs(firstQ(lastVisible))

  const results = snapshots.docs.map(async (doc) => {
    const asset = doc.data()
    const assetUrl = await getAssetUrl(asset.fileName).then((url) => url)

    return { ...asset, id: doc.id, fileName: assetUrl }
  })

  return await Promise.all(results)
}
// export const currentTimestamp = () => serverTimestamp()
// export const addArray = (item: unknown) => arrayUnion(item)
// export const removeArray = (item: unknown) => arrayRemove(item)

// Storage instance
const storage = getStorage(app)
export const getAssetUrl = async (path: string) =>
  await getDownloadURL(ref(storage, path))
