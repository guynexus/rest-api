export default [
  {
    name: "default",
    type: "postgres",
    url:  process.env.DATABASE_URL,
    synchronize: false,
    ssl: { rejectUnauthorized: false },
    checkServerIdentity:false,
    entities: ["./src/typeorm/entity/**/*.ts", "./src/typeorm/entity/**/*.js"],
    migrations: ["src/typeorm/migration/**/*.ts", "./src/typeorm/migration/**/*.js"],
    subscribers: ["src/typeorm/ubscriber/**/*.ts", "./src/typeorm/subscriber/**/*.js"],
    cli: {
      entitiesDir: "./src/typeorm/entity",
      migrationsDir: "./src/typeorm/migration",
      subscribersDir: "./src/typeorm/subscriber"
    }
  },
  {
    name: "postgres",
    type: "postgres",
    url:  process.env.DATABASE_URL,
    synchronize: false,
    ssl: { rejectUnauthorized: false },
    checkServerIdentity:false,
    entities: ["./src/typeorm/entity/**/*.ts", "./src/typeorm/entity/**/*.js"],
    migrations: ["src/typeorm/migration/**/*.ts", "./src/typeorm/migration/**/*.js"],
    subscribers: ["src/typeorm/ubscriber/**/*.ts", "./src/typeorm/subscriber/**/*.js"],
    cli: {
      entitiesDir: "./src/typeorm/entity",
      migrationsDir: "./src/typeorm/migration",
      subscribersDir: "./src/typeorm/subscriber"
    }
  }
]
