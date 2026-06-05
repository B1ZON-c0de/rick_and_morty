import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-9xl font-bold text-green-800">404</h1>
      <button
        className="btn-primary"
        onClick={() => navigate("/", { replace: true })}
      >
        Вернуться на главную
      </button>
    </div>
  );
};
