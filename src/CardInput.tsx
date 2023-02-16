import { useState } from 'react'
import clsx from 'clsx'
import * as yup from 'yup'
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikProps,
  FormikValues,
} from 'formik'
import { CompleteIcon } from './Icons'

const validationSchema = yup.object({
  name: yup.string().required("Can't be blank"),
  card: yup
    .string()
    .matches(/^[0-9]{16}$/, 'Wrong format, must be 16 digits')
    .required("Can't be blank"),
  month: yup
    .string()
    .matches(/^[0-9]{2}$/, 'Wrong format, must be 2 digits')
    .required("Can't be blank"),
  year: yup
    .string()
    .matches(/^[0-9]{2}$/, 'Wrong format, must be 2 digits')
    .required("Can't be blank"),
  cvc: yup
    .string()
    .matches(/^[0-9]{3}$/, 'Wrong format, must be 3 digits')
    .required("Can't be blank"),
})

interface TFormValues extends yup.InferType<typeof validationSchema> {
  name: string
  card: string
  month: string
  year: string
  cvc: string
}

export default function CardInput() {
  const [success, setSuccess] = useState(false)

  const initialValues = {
    name: '',
    card: '',
    month: '',
    year: '',
    cvc: '',
  }

  return (
    <section className='grid place-content-center'>
      {success ? (
        <ThankYou />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            setSuccess(true)
          }}
        >
          {(props: FormikProps<any>) => (
            <Form
              id='card-details'
              className='z-50 flex max-w-[380px] -translate-y-8 flex-col gap-8 md:max-w-lg md:rounded-xl md:bg-white/30 md:p-8 md:backdrop-blur-sm'
            >
              <div className='relative flex flex-col'>
                <label
                  htmlFor='name'
                  className='pb-2 text-xs tracking-widest text-_very-dark-violet md:text-sm'
                >
                  CARDHOLDER NAME
                </label>
                <Field id='name' name='name'>
                  {({
                    field,
                    form,
                  }: {
                    field: FormikValues
                    form: FormikValues
                  }) => (
                    <input
                      type='text'
                      {...field}
                      placeholder='e.g. Jane Appleseed'
                      className={clsx(
                        form.touched.name && form.errors.name
                          ? 'border-_error-red'
                          : 'border-_light-grayish-violet',
                        'cursor-default rounded-lg border px-3 py-2 text-lg outline-none placeholder:text-_light-grayish-violet'
                      )}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name='name'
                  component='div'
                  className='absolute -bottom-5 text-xs text-_error-red'
                />
              </div>

              <div className='relative flex flex-col'>
                <label
                  htmlFor='card'
                  className='pb-2 text-xs tracking-widest text-_very-dark-violet md:text-sm'
                >
                  CARD NUMBER
                </label>
                <Field id='card' name='card'>
                  {({
                    field,
                    form,
                  }: {
                    field: FormikValues
                    form: FormikValues
                  }) => (
                    <input
                      type='text'
                      {...field}
                      placeholder='e.g. 1234 5678 9123 0000'
                      className={clsx(
                        form.touched.card && form.errors.card
                          ? 'border-_error-red'
                          : 'border-_light-grayish-violet',
                        'cursor-default rounded-lg border px-3 py-2 text-lg placeholder:text-_light-grayish-violet'
                      )}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name='card'
                  component='div'
                  className='absolute -bottom-5 text-xs text-_error-red'
                />
              </div>

              <div className='flex items-end gap-4'>
                <div className='flex flex-col gap-2'>
                  <label
                    id='expireDate'
                    className='text-xs tracking-widest text-_very-dark-violet md:text-sm'
                  >
                    EXP. DATE (MM/YY)
                  </label>
                  <div className='relative flex gap-2'>
                    <div className='flex flex-col'>
                      <Field id='month' name='month'>
                        {({
                          field,
                          form,
                        }: {
                          field: FormikValues
                          form: FormikValues
                        }) => (
                          <input
                            {...field}
                            type='text'
                            size={3}
                            aria-labelledby='expireDate'
                            placeholder='MM'
                            className={clsx(
                              form.touched.month && form.errors.month
                                ? 'border-_error-red'
                                : 'border-_light-grayish-violet',
                              'cursor-default rounded-lg border px-3 py-2 text-lg placeholder:text-_light-grayish-violet'
                            )}
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name='month'
                        component='div'
                        className='absolute -bottom-5 left-0 whitespace-nowrap text-xs text-_error-red'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <Field id='year' name='year'>
                        {({
                          field,
                          form,
                        }: {
                          field: FormikValues
                          form: FormikValues
                        }) => (
                          <input
                            {...field}
                            type='text'
                            size={3}
                            aria-labelledby='expireDate'
                            placeholder='YY'
                            className={clsx(
                              form.touched.year && form.errors.year
                                ? 'border-_error-red'
                                : 'border-_light-grayish-violet',
                              'cursor-default rounded-lg border px-3 py-2 text-lg placeholder:text-_light-grayish-violet'
                            )}
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name='year'
                        component='div'
                        className='absolute -bottom-5 left-0 whitespace-nowrap text-xs text-_error-red'
                      />
                    </div>
                  </div>
                </div>
                <div className='relative flex flex-col'>
                  <label
                    htmlFor='cvc'
                    className='pb-2 text-xs tracking-widest text-_very-dark-violet md:text-sm'
                  >
                    CVC
                  </label>
                  <Field id='cvc' name='cvc'>
                    {({
                      field,
                      form,
                    }: {
                      field: FormikValues
                      form: FormikValues
                    }) => (
                      <input
                        {...field}
                        type='text'
                        size={8}
                        placeholder='e.g. 123'
                        className={clsx(
                          form.touched.cvc && form.errors.cvc
                            ? 'border-_error-red'
                            : 'border-_light-grayish-violet',
                          'cursor-default rounded-lg border px-3 py-2 text-lg placeholder:text-_light-grayish-violet'
                        )}
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name='cvc'
                    component='div'
                    className='absolute -bottom-5 text-xs text-_error-red'
                  />
                </div>
              </div>

              <button
                type='submit'
                className='w-full rounded-lg bg-_very-dark-violet p-3 text-_light-grayish-violet md:mt-3'
              >
                Confirm
              </button>
            </Form>
          )}
        </Formik>
      )}
    </section>
  )
}

// Completed State
const ThankYou = () => {
  return (
    <div className='flex w-[320px] flex-col items-center gap-8'>
      <CompleteIcon />
      <h1 className='text-3xl uppercase tracking-widest text-_very-dark-violet'>
        Thank you!
      </h1>
      <p className='text-lg tracking-wide text-_dark-grayish-violet'>
        We've added your card details
      </p>
      <button className='w-full rounded-lg bg-_very-dark-violet p-3 text-lg text-_light-grayish-violet'>
        Continue
      </button>
    </div>
  )
}
