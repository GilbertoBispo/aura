// "neon" é o motor de comunicação com o banco de dados, ele entende javascript e "traduz" em linguagem SQL
import { neon } from "@neondatabase/serverless";
// usamos o drizzle para utlizar métodos de fácil entendimento como o .insert() e o .delete(), e ele faz a tradução para que o neon entenda
import { drizzle } from "drizzle-orm/neon-http";
import "dotenv/config";

// estabelece a conexão com o banco de dados através do link especificado no DB_URL do .env
const sql = neon(process.env.DB_URL);
// criamos uma instância do drizzle que permite utilizar comandos mais fáceis de entender
const db = drizzle(sql);

export default db;