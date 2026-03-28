const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const categoriesList = [
  "Electronics",
  "Fashion",
  "Books",
  "Home & Kitchen",
  "Beauty",
  "Toys",
  "Sports",
  "Automotive",
  "Grocery",
  "Health"
];

function getRandomPrice() {
  return Math.floor(Math.random() * 5000) + 100;
}

function getRandomDiscount() {
  return Math.floor(Math.random() * 30);
}

async function main() {
  for (let categoryName of categoriesList) {
    const category = await prisma.category.create({
      data: { name: categoryName }
    });

    let products = [];

    for (let i = 1; i <= 20; i++) {
      products.push({
        name: `${categoryName} Product ${i}`,
        description: `Best ${categoryName} product number ${i}`,
        price: getRandomPrice(),
        discount: getRandomDiscount(),
        stock: Math.floor(Math.random() * 50) + 1,
        image: "https://via.placeholder.com/200",
        categoryId: category.id
      });
    }

    await prisma.product.createMany({
      data: products
    });
  }

  console.log("🔥 200+ products inserted successfully");
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());