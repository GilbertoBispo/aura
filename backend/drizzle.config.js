import "dotenv/config";
import { defineConfig } from "drizzle-kit";

// usamos o método defineConfig do drizzle-kit para definirmos onde o nosso schema.js está
export default defineConfig({
    out: "./drizzle",
    schema: "./src/db/schema.js",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DB_URL
    }
})