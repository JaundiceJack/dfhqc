const Selection = ({
  label="",
  append="",
  name,
  value,
  onChange,
  options=[],
  disabled=false,
  extraClasses=""
}) => {
  return (
    <div className={"grid grid-cols-3 " + extraClasses}>
      {label &&
        <p className={
          "mr-2 text-right text-blue-100 font-semibold " +
          "self-center"}>
          {label}
        </p>
      }
      <select name={name} value={value} onChange={onChange} disabled={disabled}
        className={
          "rounded my-1 py-1 pl-2 bg-gray-200 w-full self-end " +
          (( label &&  append) ? "col-span-1" :
           (!label && !append) ? "col-span-3" :
                                 "col-span-2"
          )
        }>
        {options.map((option, index) => {
          return <option key={index} value={option.value}>{option.name}</option>
        })}
      </select>
      {append &&
        (
          (typeof append === 'string' || typeof append === 'number') ?
            <p className="text-blue-100 font-semibold ml-2"> {append} </p> :
            append
        )
      }
    </div>
  )
}

export default Selection;