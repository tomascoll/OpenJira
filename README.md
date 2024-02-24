# Next. js OpenJira App
Para correr localmente, se necesita la base de datos
```
docker-compose up -d
```

* El -d, significa _detached_

* MongoDB URL Local :
```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno
Renombrar el archivo __.env.template__a__.env__

## Llenar la base de datos con informacion de pruebas

Llamara:
```
http://localhost:3000/api/seed
```