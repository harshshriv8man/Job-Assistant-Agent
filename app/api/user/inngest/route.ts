import { serve } from "inngest/next";
import { inngest } from "../../../../inngest/client";
import { helloWorld } from "../../../../inngest/functions";  // Correct import path

export const { GET, POST, PUT } = serve({
  client: inngest,  // Pass the client
  functions: [helloWorld],  // Pass the function here
});
