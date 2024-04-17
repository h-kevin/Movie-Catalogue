import React, { useRef, useEffect } from "react";

const Dialog = ({ children, open, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (dialogRef.current?.open && !open) {
      dialogRef.current?.classList.remove("open");

      setTimeout(() => {
        dialogRef.current?.close();
        onClose();
      }, 250);
    }

    if (!dialogRef.current?.open && open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({ top: 0 });
      dialogRef.current?.classList.add("open");
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onCancel={(event) => event.preventDefault()}
      className="common-dialog-container"
    >
      <div className="dialog-content">{children}</div>
    </dialog>
  );
};

export default Dialog;
