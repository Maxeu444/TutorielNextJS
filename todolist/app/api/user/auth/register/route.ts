import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectToDB } from "@utils/database";
import User from "@models/user";

export const POST = async (request: Request) => {
    const { email, password } = await request.json();

    try {
        await connectToDB;

        const existingUser = await User.findOne({ email });

        if(existingUser){
        return NextResponse.json(
            { message: 'L\'email est déjà utilisé' },
            { status: 400 }
        );
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({email, password: hashedPassword})

        return NextResponse.json(
            {message: 'Utilisateur créer avec succès', user},
            {status: 201}
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: 'Server error' },
            { status: 500 }
        );
    }
} 