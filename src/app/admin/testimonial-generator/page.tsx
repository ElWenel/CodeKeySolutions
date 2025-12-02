"use client";

import { useFormState } from "react-dom";
import { generateTestimonialsAction } from "./actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialState = {
  testimonials: [],
  error: "",
};

export default function TestimonialGeneratorPage() {
  const [state, formAction] = useFormState(
    generateTestimonialsAction,
    initialState
  );

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center py-12">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>AI Testimonial Generator</CardTitle>
          <CardDescription>
            Enter a project type to generate realistic testimonials.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="projectType">Project Type</Label>
              <Input
                id="projectType"
                name="projectType"
                placeholder="e.g., 'E-commerce website for a clothing brand'"
              />
            </div>
            <Button type="submit" className="w-full">
              Generate Testimonials
            </Button>
          </form>

          {state.error && (
            <div className="mt-6 text-center text-red-500">
              <p>{state.error}</p>
            </div>
          )}

          {state.testimonials.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold">Generated Testimonials</h3>
              <div className="mt-4 space-y-4">
                {state.testimonials.map(
                  (testimonial: string, index: number) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <p>{testimonial}</p>
                      </CardContent>
                    </Card>
                  )
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
