import { serve } from "inngest/next";
import { inngest } from "../../../../inngest/client";
import { AiJobAssistant, helloWorld } from "../../../../inngest/functions";  // Correct import path

export const { GET, POST, PUT } = serve({
  client: inngest,  // Pass the client
  functions: [
    AiJobAssistant
  ],  // Pass the function here
});
