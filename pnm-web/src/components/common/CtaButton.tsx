interface CtaButtonProps {
  displayText: string;
}

const CtaButton = ({ displayText }: CtaButtonProps) => {
  return (
    <button
      type="button"
      className="btn btn-secondary"
      style={{
        backgroundColor: "var(--secondary-color)",
        border: "none",
      }}
    >
      {displayText}
    </button>
  );
};

export default CtaButton;
