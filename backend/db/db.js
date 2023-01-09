const mongoose = require('mongoose');

const connectionUrl = `mongodb://` +
    `${process.env.MONGO_USERNAME || ''}${process.env.MONGO_USERNAME ? ':' : ''}` +
    `${process.env.MONGO_PASSWORD || ''}${process.env.MONGO_PASSWORD ? '@' : ''}` +
    `${process.env.MONGO_HOST || 'fdj_database'}` +
    `:${process.env.MONGO_PORT || 27017}` +
    `/${process.env.MONGO_DATABASE_NAME || 'sports'}`;

mongoose.set('strictQuery', false);
mongoose.connect(connectionUrl);
