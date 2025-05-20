function FormField({ label, type, value, onChange, placeholder, children }) {
  return (
    <label className="block text-white text-sm font-bold mb-2">
      {label}
      {children || (
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </label>
  );
}

export default FormField;
