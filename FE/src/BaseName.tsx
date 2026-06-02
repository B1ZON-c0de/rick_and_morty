interface Props {
  label: string;
  text: string;
}

export const BaseName = ({ label, text }: Props) => {
  return (
    <div>
      <p className="text-5xl text-green-700">
        <span className="font-semibold text-green-900">{label}: </span>
        {text}
      </p>
    </div>
  );
};
