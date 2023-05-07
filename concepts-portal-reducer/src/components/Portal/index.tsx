"use client";

import { useState } from "react"
import { createPortal } from "react-dom";
import { Modal } from "../Modal";

export const Portal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Show Modal
      </button>
      {
        isOpen && createPortal(<Modal onClose={() => setIsOpen(false)} />, document.body)
      }
    </>
  )
}