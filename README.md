# practica-rutas
A partir del proyecto actual, generar las siguientes rutas:

- Un servicio GET en la ruta `/api/estudiante` que reciba un cuerpo que tenga la siguient estructura:
```json
{
    "nombre": "edgar",
    "apellido": "huaranga",
    "codigo": "20101272K",
}
```

La respuesta del request debe tener la siguiente estructura:
```json

{
    "result": "ok",
    "message": "el cuerpo del json es válido"
}
```