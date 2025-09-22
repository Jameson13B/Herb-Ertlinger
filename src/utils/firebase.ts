import { initializeApp } from "firebase/app"
import {
  getFirestore,
  query,
  collection,
  orderBy,
  limit,
  startAfter,
  QueryDocumentSnapshot,
  getDocs,
  doc,
  updateDoc,
  onSnapshot,
  getDoc,
} from "firebase/firestore"
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage"

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
export const assetsRef = collection(db, "assets")
export const configsRef = doc(db, "admin", "configs")

export const getConfig = () => {
  return new Promise((resolve) => {
    const unsubscribe = onSnapshot(configsRef, (doc) => {
      resolve(doc.data())
    })
    return unsubscribe
  })
}

const firstQ = (lastVisible?: QueryDocumentSnapshot) =>
  query(
    assetsRef,
    orderBy("createdAt"),
    startAfter(lastVisible || null),
    limit(9)
  )

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

// Tag functions
export const getTags = async () => {
  const tags = await getDoc(configsRef)
  return tags.data()?.tags
}
export const saveTags = async (tags: {
  country: string[]
  region: string[]
  site: string[]
}) => {
  await updateDoc(doc(db, "admin", "configs"), { tags })
}

// Storage instance
export const storage = getStorage(app)
export const storageRef = ref(storage, `photos/state.fileName`)

export const getAssetUrl = async (path: string) =>
  await getDownloadURL(ref(storage, path))

export const uploadPhoto = async (
  fileName: string,
  asset: Blob | ArrayBuffer | Uint8Array
) => {
  const storageRef = ref(storage, fileName)
  await uploadBytes(storageRef, asset)
}
