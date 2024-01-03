const express = require('express');
const app = express();

// Configuración de Firebase
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-config.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Rutas y lógica del servidor aquí

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
