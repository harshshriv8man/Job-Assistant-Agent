import { serve } from "inngest/next";
import { inngest } from "../../../../inngest/client";
import { AiJobAssistant, AiResumeAgent, helloWorld } from "../../../../inngest/functions";  // Correct import path

export const { GET, POST, PUT } = serve({
  client: inngest,  // Pass the client
  functions: [
    AiJobAssistant,
    AiResumeAgent
  ],  // Pass the function here
});
