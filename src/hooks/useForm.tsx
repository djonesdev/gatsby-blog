import { useState } from 'react';

interface DefaultValues {
    [key: string]: string
}

export default function useForm(defaultValues:DefaultValues) {
  const [values, setValues] = useState(defaultValues);

  function updateValue(e) {
    // check if its a number and convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }
    setValues({
      // copy the existing values into it
      ...values,
      // update the new value that changed
      [e.target.name]: value,
    });
  }

  return { values, updateValue };
}