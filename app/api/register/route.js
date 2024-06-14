import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    // Collecting the data
    const { name, email, password } = await req.json();
    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Connecting to MongoDB
    await connectMongoDB();
    // Creating User
    try {
      await User.create({
        name,
        email,
        password: hashedPassword,
      });
    } catch (error) {
      console.log(error);
    }
    return NextResponse.json(
      { message: "User Registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something Went Wrong" },
      { status: 500 }
    );
  }
}
