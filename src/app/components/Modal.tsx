"use client";

import ROUTES from "@/routes/routes";
import { ModalProps } from "@/types/spell";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CloseBtn from "./Buttons/CloseBtn";

export default function Modal({ children }: ModalProps) {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(true);

  const handleOnClose = () => {
    setOpenModal(false);
    router.push(ROUTES.FAVORITE);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modalElement = document.querySelector(".modal-content");
      if (modalElement && !modalElement.contains(event.target as Node)) {
        router.push(ROUTES.FAVORITE);
        setOpenModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [router]);

  return (
    <div
      className={`${
        openModal ? "block" : "hidden"
      } transition-all fixed top-0 left-0 bg-black w-screen h-screen z-[400]`}
    >
      <div className="modal-content absolute z-[99999] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white  max-w-[550px] rounded-lg opacity-100 h-[500px] overflow-y-auto">
        <div className="">
          <div className="mb-10 px-6 pt-10">{children}</div>
          <div className="bg-white py-3 sticky bottom-0 left-0 shadow-top px-6">
            <CloseBtn onClick={handleOnClose} buttonTitle="Close" />
          </div>
        </div>
      </div>
    </div>
  );
}
