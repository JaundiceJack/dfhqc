const HmTestLine = ({ testName, sample, result, spec, unit="" }) => {
  // Convert the date to mm/dd/yyyy format
  const formatDate = (rawDate) => {
    const date = new Date(rawDate);
    return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
  }

  // Capitalize the first word of each string
  const capitalize = (strang) => {
    if (strang.length > 0) {
      const words = strang.split(' ');
      let final = [];
      words.forEach(word => {
        final.push(word[0].toUpperCase()+word.substring(1))
      })
      return final.join(' ');
    }
    else return "";

  }

  // Assign a color to the testing string
  const textColor = () => {
    // Text is white if not tested
    if (spec === null)
      return "text-white"
    // Red if is tested and not yet sampled
    else if (spec !== null && sample === null)
      return "text-red-300"
    // Yellow if sampled but not yet on test
    else if (spec !== null && sample !== null && sample.sent_to === null)
      return "text-yellow-100"
    // Indigo if sent out but no results
    else if (spec !== null && sample !== null && sample.sent_to !== null && result === null)
      return "text-indigo-200"
    // Green if results passing, red if results failing
    else if (spec !== null && sample !== null && sample.sent_to !== null && result !== null)
      return result <= spec ? "text-green-200" : "text-red-400";
    else
      return "text-white"
  };

  // Get the text to display for the given test
  const testText = () => {
    // Text is "Not tested" if there's no spec
    if (spec === null)
      return "Not tested";
    // Text is "Needs Test" if tested but not sampled
    else if (spec !== null && sample === null)
      return "Needs test";
    // Text is "Sampled on Date" if sampled but not yet tested
    else if (spec !== null && sample !== null &&
             sample.sample_date !== null && sample.sent_to === null)
      return `Sampled on ${formatDate(sample.sample_date)}`
    // Text is "Sent to Lab on Date" if on test
    else if (spec !== null && sample !== null &&
             sample.sample_date !== null && sample.sent_to !== null &&
             result === null || result === "")
      return `Sent to ${capitalize(sample.sent_to.name)} on ${formatDate(sample.sent_date)}`
    // Text is the result if off test
    else if (spec !== null && sample !== null &&
             sample.sample_date !== null && sample.sent_to !== null &&
             result !== null)
      return `${result} ${unit}`
  };

  return (
    <div className="grid grid-cols-3">
      <p className="text-right mr-2 capitalize">{testName}:</p>
      <p className={textColor()+" col-span-2 "}> { testText() } </p>
    </div>
  )
}

export default HmTestLine;