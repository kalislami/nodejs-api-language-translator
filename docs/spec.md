# Language translator API Spec

## Translate API

Endpoint : POST /api/translate

Request Body :

```json
{
  "kalimat" : "Hello World!"
}
```

Response Body Success :

```json
{
  "data" : {
    "kalimat" : "Hello World!",
    "arti" : "Halo dunia!",
    "bahasa_asal" : "English",
    "bahasa_arti" : "Indonesia"
  }
}
```

Response Body Error :

```json
{
  "errors" : "value not allowed to be empty" 
}
```