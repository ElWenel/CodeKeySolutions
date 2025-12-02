import { configureGenkit } from '@genkit-ai/core';
import { defineFlow } from '@genkit-ai/flow';
import { googleAI } from '@genkit-ai/googleai';
import * as z from 'zod';
import { generate } from '@genkit-ai/ai';

configureGenkit({
  plugins: [googleAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY })],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

export const generateRealisticTestimonialsFlow = defineFlow(
  {
    name: 'generateRealisticTestimonialsFlow',
    inputSchema: z.object({ projectType: z.string() }),
    outputSchema: z.object({ testimonials: z.array(z.string()) }),
  },
  async ({ projectType }) => {
    const prompt = `Act as a marketing expert. Generate 2 realistic testimonials for a web development project about "${projectType}".`;

    const llmResponse = await generate({
      model: 'google/gemini-pro',
      prompt,
      config: {
        temperature: 0.7,
      },
    });

    const testimonials = llmResponse.text().split('\n\n');
    return { testimonials };
  }
);
