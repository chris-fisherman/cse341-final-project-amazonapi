module.exports = mongoose => {
  const categories = mongoose.model(
    'categories',
    mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      updateAt: {
        type: Date,
        default: Date.now
      }
    }, { versionKey: false })
  );
    
  return categories;
};
