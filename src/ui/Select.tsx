import { useRef, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { FaChevronDown } from "react-icons/fa";

function Select({ selectedType, setSelectedType }) {
  const [isOpen, setIsOpen] = useState(false);
  const seleectRef = useRef<HTMLDivElement>(null);
  const closeSelect = () => setIsOpen(false);
  useOutsideClick(seleectRef, closeSelect);

  const documentTypes = [
    { value: "governmentId", label: "Government ID" },
    { value: "offerLetter", label: "Offer Leter" },
    { value: "taxForm", label: "Tax Form" },
    { value: "directDeposit", label: "Bank Details" },
  ];

  return (
    <div className="relative mt-4 w-36 rounded-md" ref={seleectRef}>
      <button
        className="flex items-center justify-between w-full text-xs text-left px-4 py-2 bg-white font-semibold italic rounded-md border border-gray-300"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{selectedType || "Select type"}</span>
        <FaChevronDown
          className={`${isOpen ? "rotate-180" : ""} transition-transform duration-200`}
        />
      </button>

      {isOpen && (
        <ul className="absolute top-[100%] w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 m-0">
          {documentTypes.map((type) => (
            <li
              key={type.value}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-xs"
            >
              <button
                onClick={() => {
                  setSelectedType(type.label);
                  setIsOpen(false);
                }}
              >
                {type.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Select;
