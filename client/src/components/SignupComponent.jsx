import React from 'react';
import DynamicForm from '../components/DynamicForm';

const signupFields = [
    {name: 'name', type: 'text', label: 'Name', placeholder: 'Name'},
    {name: 'surname', type: 'text', label: 'Surname', placeholder: 'Surname'},
    {name: 'username', type: 'text', label: 'Username', placeholder: 'Username'},
    {name: 'mail', type: 'email', label: 'Mail', placeholder: 'Email'},
    {name: 'password', type: 'password', label: 'Password', placeholder: 'Password'},
    {name: 'phone', type: 'tel', label: 'Phone number', placeholder: 'Phone'},
    {
        name: 'dob',
        type: 'text',
        label: 'Date of Birth',
        placeholder: 'Birth Date',
        onFocus: 'date',
        onBlur: 'text'
    },
];

function SignupComponent() {
    return (
        <div className="form-container signup-form-container">
            <DynamicForm formData={signupFields} name={'Sign up'} showTerms={true}/>
        </div>
    );
}

export default SignupComponent;
