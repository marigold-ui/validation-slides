import { Button, Form, Stack, TextField } from "@marigold/components";
import { getFormData, post } from "./utils";

interface User {
  name: string;
  email: string;
}

export const Example = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent page refresh.
    e.preventDefault();

    // Transform form data to regular object
    const { name, email } = getFormData<User>(e.currentTarget);

    // Post form data
    post({ name, email });
  };

  return (
    <Form onSubmit={onSubmit} autoComplete="off">
      <Stack space={1} alignX="left">
        <TextField label="Name" name="name" required />
        <TextField type="email" label="E-Mail" name="email" required />
        <Button variant="primary" size="small" type="submit">
          Submit
        </Button>
      </Stack>
    </Form>
  );
};
