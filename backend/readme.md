## Create .dev.env
  
  crie o arquivo para poder adicionar as variaveis do db

## Create DB

  yarn sequelize db:create

## Create new migration

  yarn sequelize migration:create --name=migrationName

## Create new seeder

  yarn sequelize seed:generate --name=seederName

## Run migrations

  yarn sequelize db:migrate

## Run seeder

  yarn sequelize db:seed:all

## Undo migrations

  last one
  yarn sequelize db:migrate:undo
  by name
  yarn sequelize db:migrate:undo --name=migrationName

## Base API
  http://localhost:3333/api/