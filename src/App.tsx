import * as yup from 'yup'
import { Formik, Form, Field } from 'formik'

const validationSchema = yup.object({
  name: yup.string().required("Can't be blank"),
  card: yup
    .string()
    .matches(/^[0-9]{16}$/, 'Wrong format, must be 16 digits')
    .required("Can't be blank"),
  month: yup.number().max(2).required("Can't be blank"),
  year: yup.number().max(2).required("Can't be blank"),
  cvc: yup.string().matches(/^[0-9]{3}$/, 'Wrong format, must be 3 digits'),
})

interface TFormValues extends yup.InferType<typeof validationSchema> {
  name: string
  card: string
  month: number
  year: number
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
        <div className='h-56 max-w-md translate-x-[118px] bg-card-front bg-auto bg-center bg-no-repeat p-8 drop-shadow-2xl'>
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
        <div className='mt-6 h-56 max-w-md translate-x-[236px] bg-card-back bg-auto bg-center bg-no-repeat p-8 drop-shadow-2xl'>
          <div>000</div>
        </div>
      </div>

      {/* form */}
      <section className='grid place-content-center'>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions })
          }}
        >
          <Form id='card-details' className='flex max-w-md flex-col'>
            <label htmlFor='name' className='flex flex-col uppercase'>
              Cardholder Name
              <Field id='name' name='name' placeholder='e.g. Jane Appleseed' />
            </label>
            <label htmlFor='card' className='flex flex-col uppercase'>
              Card Number
              <Field
                id='card'
                name='card'
                placeholder='e.g. 1234 5678 9123 0000'
              />
            </label>
            <fieldset form='card-details'>
              <legend className='uppercase'>Exp. Date (MM/YY)</legend>
              <Field id='month' name='month' placeholder='MM' />
              <Field id='year' name='year' placeholder='YY' />
            </fieldset>
            <label htmlFor='cvc' className='flex flex-col uppercase'>
              CVC
              <Field id='cvc' name='cvc' placeholder='e.g. 123' />
            </label>
            <button type='submit'>Confirm</button>
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
