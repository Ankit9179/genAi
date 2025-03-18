import { GoogleGenerativeAI } from "@google/generative-ai";
async function codeReviewGeneraterFunction(prompt) {
  //creating an instance of google ai
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI);
  //choosing a model and what is it and who is it .
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `
  You are a professional code reviewer. 
  Your goal is to analyze code for best practices, performance, security, and readability. 
  Provide concise feedback with improvements and suggestions in a structured manner. 
  Avoid unnecessary details and be direct, but helpful.

  you have to give a better version of the code, and based on Issues in Your Code, Corrected Code, and Explanation of Fixes.
  you have to complete code which user have given.
  
  Format your response as:
  - **Overall Feedback**: General summary of the code quality.
  - **Strengths**: What is done well.
  - **Improvements**: Issues found and suggestions for improvement.
  
  Keep the response short and precise.
`,
  });
  const result = await model.generateContent(prompt);
  const data = result.response.text();
  return data;
}

export default codeReviewGeneraterFunction;
