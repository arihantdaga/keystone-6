# Keystone MongoDB Example

This example demonstrates using Keystone with MongoDB as the database provider.

## Prerequisites

- MongoDB running locally (default: `mongodb://localhost:27017`)
- Node.js

## Running

```bash
# Set your MongoDB connection string (optional, defaults to localhost)
export DATABASE_URL="mongodb://localhost:27017/keystone-example"

# Start the dev server
npm run dev
```

## Notes

- MongoDB uses ObjectId for `_id` fields automatically
- No SQL migrations — Keystone uses `db push` for schema synchronization
- The `decimal` field type is not supported with MongoDB
- Select fields with `type: 'enum'` are stored as strings (MongoDB has no native enum type)
