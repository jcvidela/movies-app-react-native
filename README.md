### Instrucciones para levantar el proyecto en desarrollo.

Instalar dependencias del proyecto.
##### `yarn install o npm install`

Correr react native en modo desarrollo:
##### `yarn start`

Correr el proyecto en android:
##### `yarn android`

Correr el proyecto en ios:
##### `yarn ios`

Resetear cache:
##### `yarn resetcache`

### Levantar api
Para levantar la api en modo desarrollo,   
se debe modificar el host desde el package.json (línea 9)  
y en el env.js(linea 4) modificar la ip,   
setear su propia ip(IPV4 Address)
para poder acceder a los datos de la api, de otra manera no funcionará la misma.
##### Comando
##### `yarn startapi`

