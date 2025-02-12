module.exports = (mongoose) => {
  const orders = mongoose.model(
    'orders',
    mongoose.Schema(
      {
        user_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'users',
          required: true
        },
        products: [
          {
            product_id: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'products',
              required: true
            },
            quantity: {
              type: Number,
              required: true
            },
            price: {
              type: Number,
              required: true
            }
          }
        ],
        totalAmount: {
          type: Number,
          required: true
        },
        createdAt: {
          type: Date,
          default: Date.now
        },
        status: {
          type: String,
          enum: ['pending', 'shipped', 'delivered'],
          default: 'pending'
        },
        shippingAddress: {
          street: {
            type: String,
            required: true
          },
          city: {
            type: String,
            required: true
          },
          state: {
            type: String,
            required: true
          },
          country: {
            type: String,
            required: true
          },
          zip: {
            type: String,
            required: true
          }
        },

        updateAt: {
          type: Date,
          default: Date.now
        }
      },
      { versionKey: false }
    )
  );

  return orders;
};
