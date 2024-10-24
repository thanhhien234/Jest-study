import React from 'react';
import { render, screen, fireEvent, cleanup  } from '@testing-library/react';
import '@testing-library/jest-dom';
import ModifyModal from '../ModifyModal';

describe('ModifyModal component testing', () => {
    let setIsOpenMock: jest.Mock;

    beforeEach(() => {  
        window.alert = jest.fn();
        setIsOpenMock = jest.fn();
        render(<ModifyModal setIsOpen={setIsOpenMock} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    test('render input field and buttons', () => {
        const inputElement = screen.getByRole('textbox');
        const cancelButton = screen.getByText('취소');
        const saveButton = screen.getByText('저장');

        expect(inputElement).toBeInTheDocument();
        expect(cancelButton).toBeInTheDocument();
        expect(saveButton).toBeInTheDocument();
        
    });

    test('call setIsOpen when cancel button is clicked', () => {
        const cancelButton = screen.getByText('취소');
        fireEvent.click(cancelButton);

        expect(setIsOpenMock).toHaveBeenCalledTimes(1);
        expect(setIsOpenMock).toHaveBeenCalledWith(false);
    });

    test('call setIsOpen when save button is clicked', () => {
        const saveButton = screen.getByText('저장');
        fireEvent.click(saveButton);

        expect(setIsOpenMock).toHaveBeenCalledTimes(1);
        expect(setIsOpenMock).toHaveBeenCalledWith(false);
    });
});