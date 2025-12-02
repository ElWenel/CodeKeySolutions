import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { projectType } = await request.json();

    if (!projectType) {
      return NextResponse.json(
        { error: "Project type is required." },
        { status: 400 }
      );
    }

    // Simulamos la generación de testimonios
    // En producción, aquí llamarías a Genkit Flow
    const testimonials = [
      `This website transformed our business! The design is modern, the performance is incredible, and our conversion rate increased by 40%. Highly recommended!`,
      `Amazing service and outstanding results. The team delivered a beautiful landing page that perfectly captures our brand. Worth every penny!`,
    ];

    return NextResponse.json({
      testimonials,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to generate testimonials." },
      { status: 500 }
    );
  }
}
