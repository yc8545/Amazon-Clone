import { prisma } from "@/lib/prisma";

export async function GET(req, context) {
  try {
    const { id } = await context.params; // ✅ FIXED

    const product = await prisma.product.findUnique({
      where: {
        id: Number(id), // ✅ correct
      },
    });

    if (!product) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }

    return Response.json(product);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}