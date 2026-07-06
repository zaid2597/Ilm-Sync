export default function Input({
  label,
  id,
  type = "text",
  placeholder,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors duration-200 focus:ring-2 focus:ring-brand-500/30 ${
          error
            ? "border-red-300 focus:border-red-500"
            : "border-slate-200 focus:border-brand-500"
        } ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
