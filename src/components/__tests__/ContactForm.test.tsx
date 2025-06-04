import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  it('renders inputs and submits the form', () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello there!' } });
    fireEvent.click(submitButton);

    // Add your assertions here
  });
});
