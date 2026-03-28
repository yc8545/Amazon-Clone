import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
    });

    return Response.json(products);
  } catch (error) {
    return Response.json({ error: "Failed to fetch products" });
  }
}