import { useState } from "react";
import { Button, Stack, TextField } from "@marigold/components";
import { getFormData, post } from "./utils";

interface User {
  name: string;
  email: string;
}

export const App = () => {
  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent page refresh.
    e.preventDefault();

    // Transform form data to regular object
    const { name, email } = getFormData<User>(e.currentTarget);

    // Validate form input
    const nextErrors = {
      name: name.length > 0,
      email: email.length > 0 && /^\S+@\S+\.\S+$/.test(email),
    };
    setErrors(nextErrors);

    if (nextErrors.name || nextErrors.email) {
      return;
    }

    // Post form data
    post({ name, email });
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack space={1}>
        <TextField
          label="Name"
          name="name"
          width={44}
          required
          error={errors.name}
          errorMessage="Field is required."
        />
        <TextField
          type="email"
          label="E-Mail"
          name="email"
          width={44}
          required
          error={errors.email}
          errorMessage="Please enter a valid email address!"
        />
        <Button variant="primary" size="small" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
};
