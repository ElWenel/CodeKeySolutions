"use server";

export async function generateTestimonialsAction(
  prevState: {
    testimonials: string[];
    error?: string;
  },
  formData: FormData
) {
  const projectType = formData.get("projectType") as string;

  if (!projectType) {
    return {
      testimonials: [],
      error: "Project type is required.",
    };
  }

  try {
    const response = await fetch("/api/generate-testimonials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ projectType }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate testimonials");
    }

    const result = await response.json();
    return {
      testimonials: result.testimonials,
    };
  } catch (error) {
    console.error(error);
    return {
      testimonials: [],
      error: "Failed to generate testimonials.",
    };
  }
}
