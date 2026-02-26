type FileInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
};
function Input({
  onChange,
  label = "Upload a scan or photo of your documents",
}: FileInputProps) {
  return (
    <div>
      <input
        type="file"
        id="fileUpload"
        accept=".pdf, .jpeg,.png,.jpg"
        className="hidden"
        onChange={onChange}
        aria-describedby="fileUploadDesc"
      />

      <label
        htmlFor="fileUpload"
        className="mt-2 cursor-pointer rounded py-2 text-slate-700 text-xs bg-slate-100 flex items-center gap-1"
      >
        <span className="text-xs text-black border-2 border-slate-500 rounded-lg p-1 ml-1">
          Choose File
        </span>
        <p>{label}</p>
      </label>
      <span className="text-xs text-red-500 italic">
        supported document format: pdf and jpg
      </span>
    </div>
  );
}
export default Input;
