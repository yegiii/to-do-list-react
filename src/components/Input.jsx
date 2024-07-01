export default function Input({ label, textarea, ...props }) {
  return (
    <p>
      <label className="uppercase w-full">{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}
