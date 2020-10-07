import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../../Modal';
import NakedButton from '../../../../NakedButton';
import styled from 'styled-components';
import Button from '../../../../Button';
import FormItem from '../../../../FormItem';
import Input from '../../../../Input';


const Form = styled.form`
    padding: 16px 0;
`;

const EMAIL_REGEXP = /\S+@\S+\.\S+/;

const FORM = {
    email: {
        key: 'email',
        label: 'Email',
        getErrorMessage: (value) => {
            if (!value) {
                return 'Plase enter your email';
            }
            if(!EMAIL_REGEXP.test(value)) {
                return 'Plase enter a valid email address';
            }
        }
    },
    password: {
        key: 'password',
        label: 'Password',
        type: 'password',
        getErrorMessage: (value) => {
            if (!value) {
                return 'Plase enter your password';
            }
        }
    },
    confirmPassword: {
        key: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        getErrorMessage: (value) => {
            if (!value) {
                return 'Plase enter your password';
            }
            
            if (value !== password) {
                return 'Your password does not match';
            }
        }   
    }
}
  
const SignInModal = ({
    onClose,
    onSignUp
}) => {
    const [formData, setFormData] = useState({
        email:{
            value: '',
            touched: false,
        },
        password: {
            value: '',
            touched: false
        },
        confirmPassword: {
            value: '',
            touched: false
        },
    })

const handleFormDataChange = (target) => {
    return (event) => {
        const { value } = event.target
        event.preventDefault();
        setFormData({...formData, [target]:{
            value,
            touched: true
        }})
    }
}

const handleFormSubmit = (event) => {
    event.preventDefault();

    if(!isFormValid()) {
        console.log('There are validation errors');
    }

    console.log('sgin up', formData)
}

const isFormValid = () => {
    const errorMessages = Object.keys(formData).map((key) => {
        const errorMessage = getErrorMessage(key);
        return errorMessage
    }).filter((v)=>!!v);

    return !errorMessages.length;
}

const getErrorMessage = (target) => {
    const data = Object.keys.reduce((obj, key)=>({
        ...obj,
        [target]: formData[key].value
    }),{})

    return FORM[target].getErrorMessage(formData[target].value, data);
}

// const onFormDataChange = (event) => {
//     event.preventDefault();
//     setFormData({...formData, [event.target.name]:event.target.value})
// }

    return ( 
        <Modal 
        onClose={onClose}
        >   
            <Modal.Header>Sign In</Modal.Header>
            <Modal.Body>
                <Form>
                    {Object.keys(FORM).map((key)=>{
                        const { label, type } = FORM[key];
                        const { value, touched } = formData[key];
                        const errorMessage =  touched && getErrorMessage(key);
                        {console.log(errorMessage)}
                        return (
                            <FormItem
                              htmlFor={key}
                              label={label}
                              key={key}
                              errorMessage={errorMessage}
                            >
                                <Input
                                  name={key}
                                  onChange={handleFormDataChange(key)}
                                  id={key}
                                  type={type}
                                  errorMessage={errorMessage}
                                  value={formData[key].value}
                                />
                            </FormItem>
                        )   
                    })
                    }
                    
                    <FormItem> 
                        <Button 
                          variant="success" 
                          size="medium" 
                          width="100%"
                          disabled={!isFormValid()}
                        >Sign In</Button>
                    </FormItem>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                Not a meber yet?&nbsp;
                <NakedButton variant="link" onClick={onSignUp}>Sign up now</NakedButton>
            </Modal.Footer>
        </Modal>
     );
}

SignInModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    // onSignUp: PropTypes.func.isRequired,
}
 
export default SignInModal;