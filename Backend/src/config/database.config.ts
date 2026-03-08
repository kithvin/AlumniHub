import mongoose from 'mongoose';

export const setupDatabaseLogs = () => {
  mongoose.connection.on('connected', () => {
    console.log(
      `Database Connected to: ${mongoose.connection.db?.databaseName}`,
    );
  });

  mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error.message);
  });
};