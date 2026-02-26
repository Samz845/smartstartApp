import { useState } from "react";
import toast from "react-hot-toast";
import Select from "../../ui/Select";
import Input from "../../ui/Input";
import { useEmployeeFile } from "./useEmployeeFile";

function EmployeeDocUploads() {
  const { isUploading, uploadDocs } = useEmployeeFile();

  const [selectedType, setSelectedType] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;
    if (!selectedType) {
      toast.error("please select document type");
      return;
    }
    setSelectedFile(file);
    uploadDocs(
      { documentType: selectedType, file },
      {
        onSuccess: () => {
          setSelectedFile(null);
          setSelectedType("");
        },
        onError: () => {
          setSelectedFile(null);
          setSelectedType("");
        },
      },
    );
    e.target.value = "";
  };

  return (
    <div className="flex flex-col mt-8">
      <span className="text-xl text-slate-700">Upload Documents here</span>
      <Select selectedType={selectedType} setSelectedType={setSelectedType} />

      {!selectedFile ? (
        <Input onChange={handleChange} />
      ) : (
        <p className="text-sm text-slate-600 mt-4">
          <span className="bg-red-500 p-1 mr-1 rounded text-white">
            Selected File:
          </span>
          {selectedFile.name}
        </p>
      )}
    </div>
  );
}

export default EmployeeDocUploads;
