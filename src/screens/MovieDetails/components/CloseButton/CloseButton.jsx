import React from "react";

import CloseOutlined from "../../../../assets/icons/close-outlined.svg?react";

const CloseButton = ({ closeModal }) => (
  <CloseOutlined className="close-modal-icon" onClick={closeModal} />
);

export default CloseButton;
