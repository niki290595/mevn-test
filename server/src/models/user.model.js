import db from '../config/db'
import bcrypt from 'bcryptjs'
import 'mongoose-type-email'

const UserSchema = new db.Schema({
  email: {
    type: db.SchemaTypes.Email,
    require: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    require: true,
    trim: true,
    minlength: [6, "Слишком короткий пароль"]
  }
});

UserSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')){
    user.password = await bcrypt.hash(user.password, 12)
  }
  next();
});

UserSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = db.model('User', UserSchema);
