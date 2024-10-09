const fs = require('fs');
const path = require('path');
require('dotenv').config(); // Cargar las variables de entorno


// Ruta al archivo environment.ts
const targetPath = path.join(__dirname, '../src/environments/environment.ts');

// Contenido del archivo environment.ts
const envConfigFile = `
export const environment = {
  production: false,
  mapboxKey: '${process.env.MAPBOX_KEY}'
};
`;

// Crear el directorio si no existe
const dir = path.dirname(targetPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Escribir el archivo environment.ts
try {
  fs.writeFileSync(targetPath, envConfigFile);
  console.log(`Archivo ${targetPath} creado correctamente.`);
} catch (err) {
  console.error(`Error al crear el archivo ${targetPath}:`, err);
}