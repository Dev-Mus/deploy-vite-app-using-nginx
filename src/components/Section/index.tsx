import { useNavigate } from "react-router-dom";

export default function Section({
  title,
  description = "",
  redirectTo,
}: {
  title: string;
  description?: string;
  redirectTo?: {
    link: string;
    description: string;
  };
}) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(redirectTo?.link ?? "/");
  };

  return (
    <>
      <h1>{title}</h1>
      <p className="read-the-docs">{description}</p>
      {redirectTo?.description && redirectTo?.link && (
        <button className="navbar-button" onClick={handleButtonClick}>
          {redirectTo?.description}
        </button>
      )}
    </>
  );
}
