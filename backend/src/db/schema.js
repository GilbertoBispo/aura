// fazemos a importação de tudo que vamos utilizar na nossa tabela, pgTable é o método para criar a tabela nova, o serial e o text são tipos de dados na tabela
import { pgTable, text, serial } from "drizzle-orm/pg-core";

// criamos um constante e atribuimos ela ao método pgTable, que aceita como atributos o nome da tabela e um objeto com as informações que ela irá possuir
const post = pgTable("textPost", {
    id: serial("id").primaryKey(),
    textPost: text("textPost") 
});

// depois de definido o index.js e o schema, podemos exportar e rodar o comando npx drizzle-kit push para criar a tabela no Neon
export default post;