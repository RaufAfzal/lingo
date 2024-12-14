// import "dotenv/config";
// import type { Config } from "drizzle-kit"

// export default {
//     schema: "./db/schema.ts",
//     out: "./drizzle",
//     driver: "pg",
//     dbCredentials: {
//         connectionString: process.env.DATABASE_URL!,
//     },
// } satisfies Config

// import "dotenv/config";
// import type { Config } from "drizzle-kit";

// export default {
//     schema: "./db/schema.ts", // Correct path to your schema file
//     out: "./drizzle", // Output folder for migrations
//     dialect: "postgresql", // PostgreSQL driver
//     dbCredentials: {
//         connectionString: process.env.DATABASE_URL!, // Ensure DATABASE_URL is set correctly
//     },
// } satisfies Config;

import "dotenv/config";
import type { Config } from "drizzle-kit";

// Parse the DATABASE_URL into its components
const dbUrl = new URL(process.env.DATABASE_URL!);
const [user, password] = dbUrl.username && dbUrl.password
    ? [dbUrl.username, dbUrl.password]
    : [undefined, undefined];

export default {
    schema: "./db/schema.ts",  // Correct path to your schema file
    out: "./drizzle",          // Output folder for migrations
    dialect: "postgresql",     // Use 'postgresql' dialect
    dbCredentials: {
        host: dbUrl.hostname,    // Extract hostname from URL
        port: parseInt(dbUrl.port || '5432', 10),  // Default PostgreSQL port
        user: user,              // User from the URL
        password: password,      // Password from the URL
        database: dbUrl.pathname.slice(1), // Extract the database name (remove the leading '/')
        ssl: true,               // Neon typically requires SSL
    },
} satisfies Config;
