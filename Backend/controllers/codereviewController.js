import codeReviewGeneraterFunction from "../services/codeReviewGenerater.js";

export const codeReviewController = async (req, res) => {
  try {
    const { prompt } = req.body;
    const geminiResult = await codeReviewGeneraterFunction(prompt);
    // console.log(geminiResult);
    if (geminiResult) {
      res.json({ success: true, geminiResult });
    } else {
      res.json({
        success: false,
        message: "Some error during code review",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
};
