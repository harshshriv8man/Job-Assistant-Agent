import { inngest } from "./client";  // Ensure correct import
import { createAgent, anthropic, openai, gemini } from '@inngest/agent-kit';

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

export const AiJobAssistantAgent = createAgent({
  name:"AI Job Assistant",
  description: "An AI Job Assistant that helps users with job-related queries.",
  system: "You are a helpful AI job assistant designed to guide users in finding job opportunities, optimizing resumes, preparing for interviews, and offering career advice. Be empathetic, professional, and provide personalized recommendations based on users' skills and goals.",
  model: gemini({
    model:"gemini-2.5-pro",
    apiKey: process.env.GEMINI_API_KEY
  })
})

export const AiJobAssistant = inngest.createFunction(
  {id:"AiJobAssistant"},
  {event:"AiJobAssistant"},
  async ({ event, step }) => {
    const {userInput} = await event?.data;
    const result = await AiJobAssistantAgent.run(userInput);
    return result;
  }
)
