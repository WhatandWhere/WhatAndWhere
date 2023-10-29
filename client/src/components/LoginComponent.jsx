// LoginPage.jsx
import React from 'react';
import DynamicForm from '../components/DynamicForm';
import './design-files-css/DynamicForm.css';

const emailPasswordFields = [
    {name: 'email', type: 'email', label: 'Email', placeholder: 'Email'},
    {name: 'password', type: 'password', label: 'Password', placeholder: 'Password'},
];

function LoginPage() {
    return (
        <div className="form-container login-form-container">
            <DynamicForm formData={emailPasswordFields} name={'Login'}/>
        </div>
    );
}

export default LoginPage;
