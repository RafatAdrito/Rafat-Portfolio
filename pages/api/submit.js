import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    },
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, phone, message } = req.body; // Destructure form data

      const newContact = await prisma.contact.create({
        data: {
          name,
          email,
          phone,
          Message: message
        },
      });

      res.status(200).json({ msg: "Data submitted successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Error submitting data" });
    }
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}