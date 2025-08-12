import React, { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa';

const LoginInputs = ({ label, type, name, placeholder, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputId = `input-${name}`;

    return (
        <div>
            {label && (
                <label htmlFor={inputId} style={{ display: 'block', fontWeight: '300' }} className='input-label'>
                    {label}
                </label>
            )}
            <div style={{ position: 'relative' }}>
                <input
                    id={inputId}
                    type={isPassword && showPassword ? 'text' : type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    style={{
                        width: '100%',
                        // padding: isPassword ? '2px' : '2px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                    }}
                    className='input-text'
                />
                {isPassword && (
                    <div
                        onClick={() => setShowPassword(prev => !prev)}

                        className='password-eye'
                    >
                        {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
                    </div>
                )}

            </div>
        </div>
    );
};

export default LoginInputs;
