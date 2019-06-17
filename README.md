Autor: Eduardo Arcentales
Programming Language: Node (10.0)

- Aplicación desplegada en google cloud.
- Se realiza uso de dockers para la creación de contenedores de la microservicio.
- Se usa docker compose para crear los contenedores y un contenedor para el balancedo de carga (2 nodos con nginx)

- Se encuentra un archivo de jenkins para la gestión de CI/CD (sin embargo no está funcional, se presenta el error: docker not found).

- Instancia de google cloud: Ubuntu 18

- Servidor Jenkins: http://35.222.107.167/jenkins
   - usuario: user
   - password: admin

- Microservicio:
    Funciona con http, no con https

- Archivos importantes:
    BPProject/pipeline.groovy
        Código del pipeline de jenkins
    docker-compose.yml
        Archivo que crea los contenedores para el microservicio y balanceador de carga.
    BPProject/dockerfile
        Crea una imagen del microservicio.
    nginx/Dockerfile
        Crea la imagen del balanceador.
- Nginx
    Usado para el balanceo, con el puerto 8080.

Para ejecutar se usa localhost (debido al error con jenkins):

curl -X POST -H "X-Parse-REST-API-Key: 2f5ae96c-b558-4c7b-a590-a501ae1c3f6c" -H "Content-Type: application/json" -d '{ "message" : "This is a test", "to": "Juan Perez", "from": "Rita Asturia", "timeToLifeSec" : 45 }' http://localhost:8080/DevOps
"Rita Asturia", "timeToLifeSec" : 45 }'

