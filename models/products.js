module.exports = (mongoose) => {
  const products = mongoose.model(
    'products',
    mongoose.Schema(
      {
        title: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: true
        },
        rating: {
          type: Number,
          required: true
        },
        image: {
          type: String,
          required: true
        },
        categoryId: {
          type: mongoose.Schema.Types.ObjectId,
          require: true,
          ref: 'categories'
        },
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          require: true
        }
      },
      { versionKey: false }
    )
  );

  return products;
};
