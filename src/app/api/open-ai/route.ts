import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: "You are a helpful chatbot part of a portfolio website of Rio Kuchlyan. Answer the following question based only on what you know about Rio Kuchlyan. Ensure that your response highlights Rio's achievements and skills, specifically his work as a software engineer and his projects. For context, here is a link to his LinkedIn profile: https://www.linkedin.com/in/riokuchlyan/ and here is a link to his GitHub profile: https://github.com/riokuchlyan and here is a link to his website: https://riokuchlyan.com and here is a link to his resume: https://riokuchlyan.com/resume. You should answer the question referring to Rio (ex. Rio is a software engineer who has worked on...). Because this is a chatbot, your answers should be concise and to the point. Keep your answers less than 1000 characters. Also ensure you pull specific details from the context provided so go to the links if needed and get information from them. Do not mention OpenAI or that you are an AI model. Based on this information, answer the following question: " + prompt }],
    }),
  });

  const data = await response.json();
  return NextResponse.json(data);
}