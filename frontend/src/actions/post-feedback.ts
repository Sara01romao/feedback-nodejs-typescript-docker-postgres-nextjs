'use server'

type FeedbackState = {
  ok: boolean;
  error: string;
  data: any | null;
};

export async function postFeedback(prevState: FeedbackState, formData: FormData): Promise<FeedbackState> {

  const feedbackForm = {
    companyCode: formData.get("companyCode")?.toString() ?? "",
    type: formData.get("type")?.toString() ?? "",
    description: formData.get("description")?.toString() ?? "",
  };

  try {
    const response = await fetch("http://localhost:8080/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackForm),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar feedback.");
    }

    const result = await response.json();
    return { ok: true, error: "", data: result,};
  } catch (err) {

    return {ok: false, error: "Preencha corretamente os campos.", data: null};
  }
}