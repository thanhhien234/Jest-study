import React from 'react';
import { render, screen } from '@testing-library/react';
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
});