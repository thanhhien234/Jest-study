import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../Input';

describe('Input component testing', () => {
    test('renders the input field and add icon', () => {
        render(<Input />);
        const inputElement = screen.getByPlaceholderText('추가하세요...');
        const addIconElement = screen.getByAltText('send');

        expect(inputElement).toBeInTheDocument();
        expect(addIconElement).toBeInTheDocument();
    });

    test('allow to type a todo item', () => {
        render(<Input />);
        const inputField = screen.getByPlaceholderText('추가하세요...') as HTMLInputElement;

        fireEvent.change(inputField, { target: { value: 'something' } }); // 'something'을 입력하면 inputField의 value가 'something'이 되는지 확인
        expect(inputField.value).toBe('something');
    });
});