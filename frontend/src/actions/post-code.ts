'use server'

type FeedbackState = {
  ok: boolean;
  error: string;
  data: any | null;
};

export async function postCode(prevState: FeedbackState, formData: FormData): Promise<FeedbackState> {

  const feedbackForm = {
    name: formData.get("name")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
  };

  try {
    const response = await fetch("http://localhost:8080/company", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackForm),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar código da empresa.");
    }

    const result = await response.json();
    return { ok: true, error: "", data: result,};
  } catch (err) {

    return {ok: false, error: "Preencha corretamente os campos.", data: null};
  }
}