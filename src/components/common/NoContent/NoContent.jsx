const NoContent = ({ message, customClass }) => {
  return (
    <div className={`no-content-container ${customClass || ""}`}>
      <p>{message || "No content!"}</p>
    </div>
  );
};

export default NoContent;
