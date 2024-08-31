import Task from "@models/tasks";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    await connectToDB();

    const tasks = await Task.find({});

    return new NextResponse(
      JSON.stringify(tasks), 
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify("Failed to fetch all tasks"),
      { status: 500 }
    );
  }
};
