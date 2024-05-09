"use client";

import { CloseIcon } from "@/icons/Icons";
import { ModalProps } from "@/types/spell";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Modal({ children }: ModalProps) {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(true);

  const handleOnClose = () => {
    setOpenModal(false);
    router.push("/favorite");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modalElement = document.querySelector(".modal-content");
      if (modalElement && !modalElement.contains(event.target as Node)) {
        router.push("/favorite");
        setOpenModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${
        openModal ? "block" : "hidden"
      } transition-all fixed top-0 left-0 bg-black w-screen h-screen z-[400]`}
    >
      <div className="modal-content absolute z-[99999] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white  max-w-[550px] rounded-lg opacity-100">
        <div className="text-end pt-4 px-4">
          <button onClick={handleOnClose}>
            <CloseIcon className="transition-all hover:fill-slate-900 hover:scale-105" />
          </button>
        </div>
        <div className="px-6 pb-8">{children}</div>
      </div>
    </div>
  );
}
