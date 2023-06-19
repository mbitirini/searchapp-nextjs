This is a simple Search Bar application using NextJS and Prisma, in order to test the full stack side once again :)
The whole idea is to create a search bar that searches based on Author name or Post
I seeded the db with fake data which I got from ChatGPT
Also used [SWR](https://swr.vercel.app/) as a wrapper for the native fetch api of react

## Getting Started

### Install packages

```
npm i
```

### Create your db and connect Prisma with it

Used Railway for my PostgreSQL db
(This one can help you on the setup:
https://dev.to/nextdev/how-to-connect-railway-app-with-nextjs-using-prisma-1eo8)

### Run database migration

```
npx prisma migrate dev --name=init
```

### Seed the database with fake data (courtesy of ChatGPT)

```
npx prisma db seed
```

### Generate the Prisma client

```
npx prisma generate
```

### Start the development server

```
npm run dev
```
