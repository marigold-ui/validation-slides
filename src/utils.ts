export const getFormData = <T>(form: HTMLFormElement) => {
  return Object.fromEntries(new FormData(form)) as unknown as T;
};

export const post = (input: unknown) => input;
