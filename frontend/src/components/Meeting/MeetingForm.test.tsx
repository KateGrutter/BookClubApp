import { fireEvent, render, screen } from '@testing-library/react';
import { MeetingForm } from './MeetingForm';
import { Meeting } from '../../models/Meeting';

test('starts with Add Next Meeting text', () => {
    render(<MeetingForm onAdd={function (meeting: Meeting): void {
        throw new Error('Function not implemented.');
    } } />)
    const text = screen.getByText("Add Next Meeting");
  expect(text).toBeInTheDocument();
});

test('when button is clicked, it shows Close text', () => {
    render(<MeetingForm onAdd={function (meeting: Meeting): void {
        throw new Error('Function not implemented.');
    } } />)
    fireEvent.click(
        screen.getByRole("button")
    );
    const text = screen.getByText("Close");
  expect(text).toBeInTheDocument();
});
test('when button is clicked again, it shows Add Next Meeting text', () => {
    render(<MeetingForm onAdd={function (meeting: Meeting): void {
        throw new Error('Function not implemented.');
    } } />)
    const btn = screen.getByRole("button")
    fireEvent.click(btn);
    fireEvent.click(btn);
    const text = screen.getByText("Add Next Meeting");
  expect(text).toBeInTheDocument();
});
test('when button is clicked again, it shows Close text', () => {
  render(<MeetingForm onAdd={function (meeting: Meeting): void {
      throw new Error('Function not implemented.');
  } } />)
  const btn = screen.getByRole("button")
  fireEvent.click(btn);
  fireEvent.click(btn);
  fireEvent.click(btn);
  const text = screen.getByText("Close");
expect(text).toBeInTheDocument();
});