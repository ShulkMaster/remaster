import { TextInput, TextArea, DatePicker, Button } from '@applaudo/react-clapp-ui';
import usLocale from 'rc-picker/lib/locale/en_US';
import styles from './todoForm.module.scss';
import { DateTime } from 'luxon';
import { useSelectTodo, useTodoDispatch } from '@/hooks/useTodo';
import { useCallback } from 'react';
import { FormApi, ValidationErrors } from 'final-form';
import { Form, Field, FieldMetaState } from 'react-final-form';

type FormValues = {
  title: string;
  date: DateTime;
  text: string;
};

const validate = (values: FormValues): ValidationErrors => {
  const errors: ValidationErrors = {};
  if (!values.title) {
    errors.title = 'Title is required';
  }
  if (!values.date) {
    console.log(values.date);
    errors.date = 'Date is required';
  }
  if (!values.text) {
    errors.text = 'Text is required';
  }
  return errors;
};

const showErrors = (meta: FieldMetaState<string>): 'error' | 'normal' => {
  if (meta.error && meta.touched) {
    return 'error';
  }
  return 'normal';
}

export const TodoForm = () => {
  const dispatch = useTodoDispatch();
  const selected = useSelectTodo((state) => state.todo.selected);
  const onSubmit = useCallback((values: FormValues, form: FormApi) => {
    form.restart();
    form.submit();
    dispatch.todo.addItem({
      ...values,
      id: '',
      done: false,
    });
  }, [dispatch]);

  return (
    <Form<FormValues> onSubmit={onSubmit as any} initialValues={selected ?? undefined} validate={validate}>
      {({handleSubmit}) => (
        <form onSubmit={handleSubmit} className={styles.form_task}>
          <div className={styles.form_task_field}>
            <Field name="title">
              {({meta, input}) => (
                <TextInput
                  className={styles.form_input}
                  label="Title"
                  placeholder="Add a title"
                  crossOrigin=""
                  value={input.value}
                  onFocus={input.onFocus}
                  state={showErrors(meta)}
                  onChange={input.onChange}
                  onBlur={input.onBlur}
                />
              )}
            </Field>
            <Field name="date">
              {({input, meta}) => (
                <DatePicker
                  className={styles.form_input}
                  locale={usLocale}
                  placeholder="Select a date"
                  value={input.value}
                  onChange={input.onChange}
                  onBlur={input.onBlur}
                  onFocus={input.onFocus}
                  state={showErrors(meta)}
                />
              )}
            </Field>
          </div>
          <div className={styles.form_task_field}>
            <Field name="text">
              {({meta, input}) => (
                <TextArea
                  label="Description"
                  placeholder="Add a description"
                  value={input.value}
                  onChange={input.onChange}
                  onFocus={input.onFocus}
                  onBlur={input.onBlur}
                  state={showErrors(meta)}
                />
              )}
            </Field>
            <Button type="submit" className={styles.cap_height}>Add</Button>
          </div>
        </form>
      )}
    </Form>
  );
};
