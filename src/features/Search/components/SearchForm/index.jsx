import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/FormFields/InputField';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

SearchForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  initialValues: {
    search: '',
  },
};

function SearchForm({ initialValues, onSubmit }) {
  const schema = yup.object().shape({
    search: yup.string(),
  });

  const form = useForm({
    mode: 'onBlur',
    defaultValues: initialValues || { search: '' },
    resolver: yupResolver(schema),
  });
  const { setValue } = form;

  // set form values whenever initialValues changes
  useEffect(() => {
    setValue('search', initialValues ? initialValues.search : '');
  }, [initialValues, setValue]);

  const handleFormSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values);
      form.reset();
    }
  };

  return (
    <form noValidate autoComplete="off" onSubmit={form.handleSubmit(handleFormSubmit)}>
      <InputField name="search" label="Search" form={form} />
    </form>
  );
}

export default SearchForm;
