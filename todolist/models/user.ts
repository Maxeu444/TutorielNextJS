import { Schema, model, models } from 'mongoose';

import { IUser } from "@types";

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: [true, 'Email requis'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Mot de passe requis'],
    },
});

const User = models.User || model<IUser>('User', userSchema);

export default User;