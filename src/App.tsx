import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

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
      <div className='my-auto'>
        {/* front of card */}
        <div className='h-[246px] max-w-md translate-x-[160px] rounded-lg bg-card-front bg-contain bg-center bg-no-repeat p-8 shadow-xl'>
          <div>
            <span>0000</span>
            <span>0000</span>
            <span>0000</span>
            <span>0000</span>
          </div>
          <div>
            <div>Jane Appleseed</div>
            <div>00/00</div>
          </div>
        </div>
        {/* back of card */}
        <div className='mt-6 h-[246px] max-w-md translate-x-[248px] rounded-lg bg-card-back bg-cover bg-center bg-no-repeat p-8 shadow-xl'>
          <div>000</div>
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
          <Form id='card-details' className='flex max-w-md flex-col gap-8'>
            <div className='relative flex flex-col'>
              <label
                htmlFor='name'
                className='pb-1 text-sm tracking-widest text-_very-dark-violet'
              >
                CARDHOLDER NAME
              </label>
              <Field
                id='name'
                name='name'
                placeholder='e.g. Jane Appleseed'
                className='rounded-lg border px-3 py-2 text-lg placeholder:text-_light-grayish-violet'
              />
              <ErrorMessage
                name='name'
                component='div'
                className='absolute -bottom-5 text-xs text-_error-red'
              />
            </div>

            <div className='relative flex flex-col'>
              <label
                htmlFor='card'
                className='pb-1 text-sm tracking-widest text-_very-dark-violet'
              >
                CARD NUMBER
              </label>
              <Field
                id='card'
                name='card'
                placeholder='e.g. 1234 5678 9123 0000'
                className='rounded-lg border px-3 py-2 text-lg placeholder:text-_light-grayish-violet'
              />
              <ErrorMessage
                name='card'
                component='div'
                className='absolute -bottom-5 text-xs text-_error-red'
              />
            </div>

            <div className='flex items-end gap-4'>
              <div>
                <label
                  id='expireDate'
                  className='pb-1 text-sm tracking-widest text-_very-dark-violet'
                >
                  EXP. DATE (MM/YY)
                </label>
                <div className='flex gap-2'>
                  <div className='relative flex flex-col'>
                    <Field
                      id='month'
                      name='month'
                      placeholder='MM'
                      aria-labelledby='expireDate'
                      size='4'
                      className='rounded-lg border px-3 py-2 text-lg placeholder:text-_light-grayish-violet'
                    />
                    <ErrorMessage
                      name='month'
                      component='div'
                      className='absolute -bottom-5 whitespace-nowrap text-xs text-_error-red'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <Field
                      id='year'
                      name='year'
                      placeholder='YY'
                      aria-labelledby='expireDate'
                      size='4'
                      className='rounded-lg border px-3 py-2 text-lg placeholder:text-_light-grayish-violet'
                    />
                    <ErrorMessage
                      name='year'
                      component='div'
                      className='absolute -bottom-5 whitespace-nowrap text-xs text-_error-red'
                    />
                  </div>
                </div>
              </div>
              <div className='relative flex flex-col'>
                <label
                  htmlFor='cvc'
                  className='translate-y-[2px] pb-1 text-sm tracking-widest text-_very-dark-violet'
                >
                  CVC
                </label>
                <Field
                  id='cvc'
                  name='cvc'
                  placeholder='e.g. 123'
                  size='16'
                  className='rounded-lg border px-3 py-2 text-lg placeholder:text-_light-grayish-violet'
                />
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
