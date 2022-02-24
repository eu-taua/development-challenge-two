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
 const { name, birthdate, email, address } = event

  if (!name || !birthdate || !email || !address) {
    return response(400, "Informe todos os dados para cadastrar usuario")
  }
  try{
      const created = await knex("patients")
      .insert({
        name,
        birthdate,
        email,
        address
      })
      .returning('*');
      
      if (!created.length) {
        return response(404, "Erro ao criar paciente")
      }
      return response(200, created)
  }
  catch(err) {
    return response(400, err.message)
  }


};
