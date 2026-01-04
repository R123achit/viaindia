import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, company, email, mobile, description } = body;

    if (!firstName || !lastName || !email || !mobile) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('viahind');
    const collection = db.collection('contacts');

    const result = await collection.insertOne({
      firstName,
      lastName,
      company,
      email,
      mobile,
      description,
      createdAt: new Date(),
      status: 'new'
    });

    return NextResponse.json(
      { message: 'Contact form submitted successfully', id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('viahind');
    const collection = db.collection('contacts');

    const contacts = await collection.find({}).sort({ createdAt: -1 }).limit(10).toArray();

    return NextResponse.json({ contacts }, { status: 200 });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}
