## Bem vindo ao Yrprey


Esse será o seu guia para consiga rodar o projeto na sua máquina, vamos usar docker para que consiga facilitar o processo de setup inicial.


### Iniciando o projeto

```sh
## docker application
docker-compose -f .docker/dev/app.yaml -p yrprey  up -d
```


### Configurando o banco de dados

```sh
# 1 - acesse o adminer na portal :8089 do docker server
# 2 - depois import o arquivo que está em backend/yrprey.sql
```

### Ajustando arquivo .env

Verifique se o seu docker usa localhost como base, caso não use server localhost, ajuste a variável `NEXT_PUBLIC_API` em *.env*.


### Acessando o frontend

Para acessar o frontend acesse `{seu host}:3005`.

Acesse o login para validar as credencias.

```sh
user: admin
pwd: admin

user: root
pwd: 1234

```
