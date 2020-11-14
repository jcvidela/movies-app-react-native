import React from 'react';

export default (initialState, onSubmit) => {
  const [values, setValues] = React.useState(initialState);
  const suscribe = (field) => (value) => setValues({...values, [field]: value});
  const handleSubmit = () => onSubmit(values);

  return [suscribe, values, handleSubmit];
};
