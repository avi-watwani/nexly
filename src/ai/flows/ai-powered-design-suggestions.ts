'use server';

/**
 * @fileOverview AI-powered design suggestions for business cards.
 *
 * This file defines a Genkit flow that suggests card design layouts, font choices, and content
 * based on the user's profession and industry.
 *
 * @exports suggestCardDesign - The main function to trigger the design suggestion flow.
 * @exports DesignSuggestionInput - The input type for the suggestCardDesign function.
 * @exports DesignSuggestionOutput - The output type for the suggestCardDesign function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DesignSuggestionInputSchema = z.object({
  profession: z.string().describe('The user\'s profession.'),
  industry: z.string().describe('The user\'s industry.'),
});
export type DesignSuggestionInput = z.infer<typeof DesignSuggestionInputSchema>;

const DesignSuggestionOutputSchema = z.object({
  layoutSuggestion: z.string().describe('Suggested layout for the business card.'),
  fontChoices: z.array(z.string()).describe('Suggested font choices for the card.'),
  contentSuggestion: z.string().describe('Suggested content for the business card.'),
});
export type DesignSuggestionOutput = z.infer<typeof DesignSuggestionOutputSchema>;

export async function suggestCardDesign(input: DesignSuggestionInput): Promise<DesignSuggestionOutput> {
  return suggestCardDesignFlow(input);
}

const prompt = ai.definePrompt({
  name: 'designSuggestionPrompt',
  input: {schema: DesignSuggestionInputSchema},
  output: {schema: DesignSuggestionOutputSchema},
  prompt: `You are an AI assistant specialized in suggesting business card designs.

  Based on the user's profession and industry, provide suggestions for the card layout, font choices, and content.

  Profession: {{{profession}}}
  Industry: {{{industry}}}

  Here are a few examples:

  If the profession is "Software Engineer" and the industry is "Technology", a good layout suggestion would be "Modern and minimalist with a focus on showcasing technical skills", font choices would be ["Roboto", "Montserrat"], and a content suggestion would be "Highlight programming languages and projects".

  If the profession is "Marketing Manager" and the industry is "Advertising", a good layout suggestion would be "Creative and eye-catching with a focus on branding", font choices would be ["Open Sans", "Raleway"], and a content suggestion would be "Showcase marketing campaigns and achievements".

  Now, provide suggestions for the following profession and industry:

  Profession: {{{profession}}}
  Industry: {{{industry}}}`,
});

const suggestCardDesignFlow = ai.defineFlow(
  {
    name: 'suggestCardDesignFlow',
    inputSchema: DesignSuggestionInputSchema,
    outputSchema: DesignSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
