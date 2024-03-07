import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios'; 

const Auth = () => {
    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('http://localhost:8000/users/', {
                name: values.name,
                email: values.email
            });
            console.log('Пользователь успешно зарегистрирован:', response.data);
        } catch (error) {
            console.error('Ошибка при регистрации пользователя:', error);
        }
    };
    return (
        <div>
            <div className="auth-container">
                <Formik
                    initialValues={{ name: "", email: "" }}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="name" className='label'>Name</label>
                                <Field
                                    type="name"
                                    name="name"
                                    className="form-control input"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className='label'>Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="form-control input1"
                                />
                            </div>
                            <button type="submit" className="auth-button">Зарегистрироваться</button>
                        </Form>    
                    )}
                </Formik>
            </div>
            
        </div>    
            
    );
}

export default Auth;
