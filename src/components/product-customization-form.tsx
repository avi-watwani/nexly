'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { getAIDesignSuggestion } from '@/app/actions';
import { Bot, Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const customizationFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  title: z.string().optional(),
  company: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  website: z.string().url({ message: 'Please enter a valid URL.' }).optional().or(z.literal('')),
  logo: z.any().optional(),
  sharingMethod: z.enum(['nfc', 'qr'], { required_error: 'You need to select a sharing method.' }),
});

const aiFormSchema = z.object({
  profession: z.string().min(2, { message: "Profession is required." }),
  industry: z.string().min(2, { message: "Industry is required." }),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      Generate Suggestions
    </Button>
  );
}

export function ProductCustomizationForm() {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof customizationFormSchema>>({
    resolver: zodResolver(customizationFormSchema),
    defaultValues: {
      name: '',
      title: '',
      company: '',
      phone: '',
      email: '',
      website: '',
      sharingMethod: 'nfc',
    },
  });

  const aiForm = useForm<z.infer<typeof aiFormSchema>>({
    resolver: zodResolver(aiFormSchema),
    defaultValues: { profession: "", industry: "" },
  });

  const [aiState, formAction] = useFormState(getAIDesignSuggestion, {
    data: null,
    error: null,
    message: null,
  });

  function onSubmit(values: z.infer<typeof customizationFormSchema>) {
    console.log(values);
    toast({
      title: 'Card Added to Cart',
      description: 'Your customized card is ready for checkout.',
    });
    router.push('/cart');
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            AI Design Assistant
          </CardTitle>
          <CardDescription>
            Tell us your profession and industry to get AI-powered design suggestions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input name="profession" placeholder="e.g., Real Estate Agent" required />
              <Input name="industry" placeholder="e.g., Property" required />
            </div>
            <SubmitButton />
          </form>
          {aiState.data && (
            <div className="mt-6 space-y-4 p-4 bg-primary/5 rounded-lg border">
              <h4 className="font-headline font-semibold">AI Suggestions</h4>
              <Accordion type="single" collapsible defaultValue="layout">
                <AccordionItem value="layout">
                  <AccordionTrigger>Layout Suggestion</AccordionTrigger>
                  <AccordionContent>{aiState.data.layoutSuggestion}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="fonts">
                  <AccordionTrigger>Font Choices</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5">
                      {aiState.data.fontChoices.map((font) => <li key={font}>{font}</li>)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="content">
                  <AccordionTrigger>Content Suggestion</AccordionTrigger>
                  <AccordionContent>{aiState.data.contentSuggestion}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Customize Your Card</CardTitle>
          <CardDescription>Enter your details to be displayed on the card.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title / Position</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., CEO" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Acme Inc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="e.g., john@acme.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., +971 50 123 4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., https://acme.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="logo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload Logo</FormLabel>
                    <FormControl>
                      <Input type="file" accept="image/*" {...field} />
                    </FormControl>
                    <FormDescription>PNG or JPG recommended. Will appear on your digital profile.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sharingMethod"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Preferred Sharing Method</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="nfc" />
                          </FormControl>
                          <FormLabel className="font-normal">NFC (Tap to Share)</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="qr" />
                          </FormControl>
                          <FormLabel className="font-normal">QR Code (Scan to Share)</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Add to Cart
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
