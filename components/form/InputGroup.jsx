
function InputGroup({ type, name, placeholder }) {
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div>
      <label htmlFor={name}>{capitalName}</label>
      <input className="p-1 w-full border rounded" type={type} name={name} placeholder={placeholder} />
    </div>
  )
}

export default InputGroup