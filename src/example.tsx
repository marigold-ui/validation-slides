import { Button, Form, Inline, Stack, TextField } from "@marigold/components";
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
      <Stack space={4} alignX="left">
        <TextField label="Name" name="name" required />
        <TextField type="email" label="E-Mail" name="email" required />
        <Inline space={2}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="secondary" type="reset">
            Reset
          </Button>
        </Inline>
      </Stack>
    </Form>
  );
};
