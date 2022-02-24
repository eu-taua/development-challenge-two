 
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
  try{
    if (id) {
        const patients = await knex("patients").where({id});
        if (patients.length) { 
            return response(200, patients)
        }
        return response(404, "usuario não encontrado")
    }
    const patients = await knex("patients");
    return response(200, patients)
  }
  catch(err) {
    return response(400, err.message)
  }

};
