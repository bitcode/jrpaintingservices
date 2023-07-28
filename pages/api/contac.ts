// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next'

interface ContactRequestBody {
  name: string
  email: string
  phone: string
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, phone, message } = req.body as ContactRequestBody

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  res.status(200).json({ message: 'Form submission successful' })
}
