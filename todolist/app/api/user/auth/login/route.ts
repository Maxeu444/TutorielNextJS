import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectToDB } from "@utils/database";
import User from "@models/user";

export const POST = async (request: Request) => {
    const { email, password } = await request.json();

    try {
        await connectToDB();

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 }
            );
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 }
            );
        }

        return NextResponse.json(
            { message: 'Login successful', user },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: 'Server error' },
            { status: 500 }
        );
    }
};
