import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadDocument } from "../../services/fileUploads";
import toast from "react-hot-toast";

export function useEmployeeFile() {
  const queryClient = useQueryClient();

  const { isPending: isUploading, mutate: uploadDocs } = useMutation({
    mutationFn: uploadDocument,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["documents"] });
      toast.success(data.message);
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUploading, uploadDocs };
}
