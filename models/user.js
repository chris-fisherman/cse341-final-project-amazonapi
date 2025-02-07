module.exports = mongoose => {
    const users = mongoose.model(
      'users',
      mongoose.Schema({
        firstName: {
          type: String,
          required: true
        },
        lastName: {
          type: String,
          required: true
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        email: {
          type: String,
          required: true
        },
      }, { versionKey: false })
    );
      
    return users;
};