# apkBanco
## ROTAS 
- [Pagina Principal](http://bancoapiselecao-net.umbler.net/home)
- - [Autenticação/Login](http://bancoapiselecao-net.umbler.net/auth/login) 
- - [Autenticação/Registro](http://bancoapiselecao-net.umbler.net/auth/register) 

# Rotas Autenticação: 
## Autenticação de login: Básicamente para usar é só mandar no body um json: 
Json login - {
"email":"usuario",
"password":"senha"
}
### Retorno
- [x] {
  "Usuario": {
    "_id": "608c99c4c451e1118857fcf1",
    "name": "Giordana Barros",
    "email": "teste",
    "conta": "2050 /01.111222-4",
    "saldo": "1.000,00",
    "createdAt": "2021-04-30T23:59:00.131Z",
    "__v": 0
  },
  "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGM5OWM0YzQ1MWUxMTE4ODU3ZmNmMSIsImlhdCI6MTYyMDAyODk3OSwiZXhwIjoxNjIwMTE1Mzc5fQ.U9SyAR0XNj0bhtD3Oh-bAHuFCkoSV0CZlCGb3mpEedI"
}
## Autenticação de Registro: Básicamente para usar é só mandar no body um json:
Json registro - {
	"name":"Gabriel Aderaldo",
	"email":"gaderaldo",
	"password":"Gabriel@123",
	"conta":"2050 /01.111222-4",
	"saldo":"1.000,00"
}

### Retorno 
- [x] {
  "user": {
    "_id": "608fbded0c5f34001677058c",
    "name": "Gabriel Aderaldo",
    "email": "gaderaldo",
    "conta": "2050 /01.111222-4",
    "saldo": "1.000,00",
    "createdAt": "2021-05-03T09:10:05.736Z",
    "__v": 0
  },
  "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGZiZGVkMGM1ZjM0MDAxNjc3MDU4YyIsImlhdCI6MTYyMDAzMzAwNSwiZXhwIjoxNjIwMTE5NDA1fQ.VstVHcqJgFRgVTXODgx7MAl5KHahKJWOzPcuhtHO2pw"
}

# Rotas Contas: Básicamente para usar é só mandar no body um json
  ## listagem de contas: Básicamente para usar é só passar o token que você recebe nos header no formato de header: authorization: "Bearer [token]" 
  
  ### Retorno
  - [x] {
  "Contas": [
    {
      "_id": "608c9a09c451e1118857fcf2",
      "nome": "conta de luz",
      "data": "03/11/1998",
      "valor": "2000",
      "user": "608c99c4c451e1118857fcf1",
      "createdAt": "2021-05-01T00:00:09.081Z",
      "__v": 0
    },
    {
      "_id": "608c9a09c451e1118857fcf3",
      "nome": "conta de luz",
      "data": "03/11/1998",
      "valor": "2000",
      "user": "608c99c4c451e1118857fcf1",
      "createdAt": "2021-05-01T00:00:09.847Z",
      "__v": 0
    },
    {
      "_id": "608c9a53b1e47d43f491b924",
      "nome": "conta de luz",
      "data": "03/11/1998",
      "valor": "2000",
      "user": "608c99c4c451e1118857fcf1",
      "createdAt": "2021-05-01T00:01:23.040Z",
      "__v": 0
    },
    {
      "_id": "608ccf690c5f340016770587",
      "nome": "conta de luz",
      "data": "03/11/1998",
      "valor": "2000",
      "user": "608c99c4c451e1118857fcf1",
      "createdAt": "2021-05-01T03:47:53.542Z",
      "__v": 0
    },
    {
      "_id": "608fae3d0c5f34001677058a",
      "nome": "Conta de agua",
      "data": "03/11/1998",
      "valor": "2000",
      "user": "608c99c4c451e1118857fcf1",
      "createdAt": "2021-05-03T08:03:09.899Z",
      "__v": 0
    }
  ]
}
 
 ## Contas de Registro: Básicamente para usar é só mandar no body um json:
Json registro - {
	"nome":"Conta de agua",
	"data":"03/11/1998",
	"valor":"2000"
}

### Retorno

- [x] {
  "Contas": {
    "_id": "608fae3d0c5f34001677058a",
    "nome": "Conta de agua",
    "data": "03/11/1998",
    "valor": "2000",
    "user": "608c99c4c451e1118857fcf1",
    "createdAt": "2021-05-03T08:03:09.899Z",
    "__v": 0
  }
}
