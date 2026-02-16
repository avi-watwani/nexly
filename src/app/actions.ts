'use server';

import { suggestCardDesign, type DesignSuggestionInput, type DesignSuggestionOutput } from '@/ai/flows/ai-powered-design-suggestions';
import { z } from 'zod';

const ActionInputSchema = z.object({
  profession: z.string().min(2, { message: 'Profession must be at least 2 characters.' }),
  industry: z.string().min(2, { message: 'Industry must be at least 2 characters.' }),
});

type ActionState = {
  data: DesignSuggestionOutput | null;
  error: string | null;
  message: string | null;
}

export async function getAIDesignSuggestion(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const validatedFields = ActionInputSchema.safeParse({
    profession: formData.get('profession'),
    industry: formData.get('industry'),
  });

  if (!validatedFields.success) {
    return {
      data: null,
      error: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid input.',
    };
  }

  try {
    const result = await suggestCardDesign(validatedFields.data as DesignSuggestionInput);
    return {
      data: result,
      error: null,
      message: 'Suggestions generated successfully.',
    };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      error: null,
      message: 'An error occurred while generating suggestions.',
    };
  }
}
