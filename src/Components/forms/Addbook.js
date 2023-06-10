import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../MyContext';

const Addbook = () => {
  const { addbook } = useContext(MyContext);
  const history = useNavigate();

  const initialValues = {
    title: '',
    author: ''
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    addbook(values);
    history('/view');
    setSubmitting(false);
  };

  return (
    <div className="container adbook">
      <Header heading="Add Student book" />
      <div className='center'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>Title</label>
          <Field
            className="form-control form-control-md"
            type="text"
            name="title"
          />
          <ErrorMessage name="title" component="div" className="error" />
          <label>Author</label>
          <Field
            className="form-control form-control-md"
            type="text"
            name="author"
          />
          <ErrorMessage name="author" component="div" className="error" />
          <button className="btn btn-primary" type="submit">
            Add book
          </button>
        </Form>
      </Formik>
      </div>
    </div>
  );
};

export default Addbook;
