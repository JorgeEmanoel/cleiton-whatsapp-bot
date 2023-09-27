import mongoose from 'mongoose'

export const connect = () => {
  mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/admin`, {
    dbName: process.env.DB_NAME
  });
}