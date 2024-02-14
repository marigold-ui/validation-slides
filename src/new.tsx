import { Button, Form, Stack, TextField } from "@marigold/components";
import { getFormData, post } from "./utils";

interface User {
  name: string;
  email: string;
}

export const App = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent page refresh.
    e.preventDefault();

    // Transform form data to regular object
    const { name, email } = getFormData<User>(e.currentTarget);

    // Post form data
    post({ name, email });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Stack space={1}>
        <TextField label="Name" name="name" width={44} required />
        <TextField
          type="email"
          label="E-Mail"
          name="email"
          width={44}
          required
        />
        <Button variant="primary" size="small" type="submit">
          Submit
        </Button>
      </Stack>
    </Form>
  );
};
