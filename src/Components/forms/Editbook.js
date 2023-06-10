import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header from '../Header';
import MyContext from '../../MyContext';

const Editbook = () => {
  const { currentBook, setEditing, updateBook } = useContext(MyContext);
  const history = useNavigate();

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required')
  });

  const handleSubmit = (values) => {
    updateBook(values);
    history('/view');
  };

  return (
    <div className="container edbook">
      <Header heading="Edit Student User" />
      <div className='center'>
      <Formik
        initialValues={currentBook}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field
              type="text"
              id="title"
              name="title"
              className="form-control form-control-md"
            />
            <ErrorMessage name="title" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author</label>
            <Field
              type="text"
              id="author"
              name="author"
              className="form-control form-control-md"
            />
            <ErrorMessage name="author" component="div" className="error" />
          </div>

          <button className="btn btn-primary" type="submit">
            Update book
          </button>

          <Link to="/view">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </Link>
        </Form>
      </Formik>
      </div>
    </div>
  );
};

export default Editbook;
