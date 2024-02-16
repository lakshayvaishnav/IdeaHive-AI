import Prompt from "@models/prompt";
import { connectToDB } from "@utils/databse";

export const GET = async (requrest, { params }) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("failed to fetch prompts created by user", {
      status: 500,
    });
  }
};
