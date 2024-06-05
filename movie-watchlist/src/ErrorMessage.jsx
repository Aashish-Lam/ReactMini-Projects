export function ErrorMessage({ message }) {
  return (
    <div className="error">
      <span>{message || "An error occurred"}</span>
    </div>
  );
}
