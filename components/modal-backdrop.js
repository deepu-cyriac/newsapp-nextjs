"use client";
//as router only works on client side

import { useRouter } from "next/navigation";

export default function ModalBackdrop() {
  const router = useRouter();
  //a next js router for navigating programmatically around the page

  return <div className="modal-backdrop" onClick={router.back} />;
}
