import db from '../config/db'
import bcrypt from "bcryptjs"

const UserSchema = new db.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: [3, "Слишком короткий логин"],
    maxlength: [30, "Слишком длинный логин"],
    match: [/(^[a-zA-Z0-9_]+$)/,
      "Логин может содержать только латинские символы, цифры и символ подчеркивания"
    ]
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

UserSchema.methods.comparePassword = async (candidatePassword) => {
  return await bcrypt.compare(candidatePassword, this.password)
};

module.exports = db.model('User', UserSchema);
