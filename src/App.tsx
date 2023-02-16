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
import { Logo } from './Icons'

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

function App() {
  const initialValues = {
    name: '',
    card: '',
    month: '',
    year: '',
    cvc: '',
  }

  return (
    <main className='grid h-screen grid-cols-2 bg-main-desktop bg-no-repeat'>
      {/* example card */}
      <div className='my-auto uppercase tracking-widest text-white'>
        {/* front of card */}
        <div className='flex h-[246px] max-w-md translate-x-[160px] flex-col justify-between rounded-lg bg-card-front bg-contain bg-center bg-no-repeat p-8 shadow-xl'>
          <Logo />
          <div>
            <div className='flex max-w-[374px] justify-between text-2xl'>
              <span>0000</span>
              <span>0000</span>
              <span>0000</span>
              <span>0000</span>
            </div>
            <div className='flex justify-between pt-4 text-sm'>
              <div className=''>Jane Appleseed</div>
              <div>00/00</div>
            </div>
          </div>
        </div>
        {/* back of card */}
        <div className='mt-6 flex h-[246px] max-w-md translate-x-[248px] items-center justify-end rounded-lg bg-card-back bg-cover bg-center bg-no-repeat p-8 shadow-xl'>
          <div className='-translate-x-4'>000</div>
        </div>
      </div>

      {/* form */}
      <section className='grid place-content-center'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log({ values, actions })
          }}
        >
          {(props: FormikProps<any>) => (
            <Form
              id='card-details'
              className='z-50 flex max-w-lg flex-col gap-8 rounded-xl bg-white/30 p-12 backdrop-blur-sm'
            >
              <div className='relative flex flex-col'>
                <label
                  htmlFor='name'
                  className='pb-2 text-sm tracking-widest text-_very-dark-violet'
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
                  className='pb-2 text-sm tracking-widest text-_very-dark-violet'
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
                    className='text-sm tracking-widest text-_very-dark-violet'
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
                            size={4}
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
                            size={4}
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
                    className='pb-2 text-sm tracking-widest text-_very-dark-violet'
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
                        size={16}
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
                className='mt-3 w-full rounded-lg bg-_very-dark-violet p-3 text-_light-grayish-violet'
              >
                Confirm
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </main>
  )
}

// Completed State
const Success = () => {
  return (
    <div>
      Thank you! We've added your card details
      <button>Continue</button>
    </div>
  )
}

const Attribution = () => {
  return (
    <div>
      Challenge by{' '}
      <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href='https://www.frontendmentor.io/profile/orphandeity'>
        Jeff R Williams
      </a>
      .
    </div>
  )
}

export default App
