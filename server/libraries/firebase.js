const { initializeApp } = require('firebase/app');
const { getStorage, ref, getDownloadURL, uploadBytesResumable } = require('firebase/storage');

const multer = require('multer');

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

let firebaseApp;
let firebaseStorage;
let upload;

const initialiseFirebase = () => {
    try{
        firebaseApp = initializeApp(firebaseConfig);
        firebaseStorage = getStorage(firebaseApp);
        upload = multer({ storage: multer.memoryStorage() });
        console.log('Firebase initialised');
        return {firebaseApp,firebaseStorage,upload};
    }
    catch (error){
        console.log('Firebase initialisation failed', error);
    }
}

const uploadImage = async (locationId,image) => {
    
    try{
        const storageRef = ref(firebaseStorage, `files/${locationId}`);

        const metadata = {
            contentType: 'image/png',
        };

        const snapshot = await uploadBytesResumable(storageRef, image , metadata);

        const imageUrl = await getDownloadURL(snapshot.ref);
        console.log('File successfully uploaded.');

        return ({
            imageUrl: imageUrl
        })
    }
    catch(error){
        return (error.message)
    }
    
}

const getFirebaseApp = () => {
    return firebaseApp;
}

const getUpload = () => {
    return upload;
}

module.exports = {
    initialiseFirebase,
    uploadImage,
    getFirebaseApp,
    getUpload,
    firebaseStorage
};