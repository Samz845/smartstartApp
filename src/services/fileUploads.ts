import type {
  UploadDocumentProps,
  UploadDocumentResponse,
} from "../types/models";

const BASE_URL = "https://capstone-hr-backend.onrender.com/api/documents";

export const uploadDocument = async ({
  documentType,
  file,
}: UploadDocumentProps): Promise<UploadDocumentResponse> => {
  const formData = new FormData();
  formData.append("documentType", documentType);
  formData.append("file", file);

  const token = localStorage.getItem("token");
  if (!token) throw new Error("User not authenticated");

  const res = await fetch(`${BASE_URL}/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) throw new Error("Unable to upload document");
  const data = await res.json();
  return data;
};
