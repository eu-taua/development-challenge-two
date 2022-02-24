const host = process.env.DB_HOST
const port = process.env.DB_PORT
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const database = process.env.DB_DATABASE

const response = require('./response')

const knex = require("knex")({
  client: "pg",
  connection: {
    host,
    port,
    user,
    password,
    database,
    ssl: { rejectUnauthorized: false },
  },
});

exports.handler = async (event) => {
  // TODO implement
  const id = event.id
  if (!id) {
    return response(400, "Informe o id do usuario que devera ser excluido")
  }
  try{
      const deleted = await knex("patients").where({id}).del().returning('*');
      if (!deleted.length) {
        return response(404, "Usuario não encontrado")
      }
      return response(200, deleted)
  }
  catch(err) {
    return response(400, err.message)
  }

};
