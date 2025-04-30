import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

// import * as schema from "./schema";

// we are directly pass DB connection string to drizzle because we are using neon serverless database 
// when we are pass DB URL by env file then gives error like "neon: no connection string provided"
// so we are using neon serverless database connection string directly in drizzle
// and we are not using schema here because we are not using drizzle schema in this project
// import { drizzle } from "drizzle-orm/neon-http";
const sql = neon("postgresql://myBD_owner:npg_JLbjdlhuC70Z@ep-restless-forest-a4ccc1n9-pooler.us-east-1.aws.neon.tech/myBD?sslmode=require");
const db = drizzle(sql);

export default db;

// in this page change by shiv 
