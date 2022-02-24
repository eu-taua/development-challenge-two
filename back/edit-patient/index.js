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
 const id = event.id
 const { name, birthdate, email, address } = event
 
  if (!id) {
    return response(400, "Informe o id do usuario que devera ser editado")
  }
  
  if (!name && !birthdate && !email && !address) {
    return response(400, "Informe ao menos um campo que devera ser editado")
  }
  try{
      const edited = await knex("patients")
      .update({
        name,
        birthdate,
        email,
        address
      })
      .where({id})
      .returning('*');
      
      if (!edited.length) {
        return response(404, "Erro ao editar")
      }
      return response(200, edited)
  }
  catch(err) {
    return response(400, err.message)
  }


};
