const AddBlendInfo = ({vals, onEntry, rawOptions, ifEditing}) => {
  const labelCs = "mr-2 text-right text-blue-100 font-semibold self-center";
  const inputCs = "rounded my-1 py-1 pl-2 bg-gray-200 w-1/2";

  return (
    <div className="flex flex-col mb-3">
      <h3 className="font-semibold text-blue-100 text-lg">Additional Info</h3>
      <div className="mb-2 h-px w-full bg-gradient-to-r from-blue-300 to-transparent" />

      <div className="grid grid-cols-3 gap-2">
        <label className={labelCs}>Batch Size:</label>
        <input className={inputCs+" w-full col-span-1"}
               name="batchSize"
               type="text"
               value={vals.batchSize}
               onChange={onEntry} />
        <p className="col-span-1 text-blue-100 font-semibold self-center">kg</p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <label className={labelCs+" col-span-1"}>Units per Serving:</label>
        <input className={inputCs+" w-full col-span-1"}
               name="unitsPerServing"
               type="text"
               value={vals.unitsPerServing}
               onChange={onEntry} />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <label className={labelCs}>Customer:</label>
        <select className={inputCs+" w-full col-span-1"}
                name="customer"
                value={vals.customer}
                onChange={onEntry}>
          <option value="dfh">DFH</option>
          <option value="dfh-canada">DFH-CANADA</option>
          <option value="new customer">New Customer</option>
        </select>
      </div>


    </div>
  )
}

export default AddBlendInfo;