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
    <main>
      {/* example card */}
      <section>
        {/* front of card */}
        <div>
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
        <div>
          <div>000</div>
        </div>
      </section>

      {/* form */}
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions })
        }}
      >
        <Form id='card-details'>
          <label htmlFor='name'>
            Cardholder Name
            <Field id='name' name='name' placeholder='e.g. Jane Appleseed' />
          </label>
          <label htmlFor='card'>
            <Field
              id='card'
              name='card'
              placeholder='e.g. 1234 5678 9123 0000'
            />
          </label>
          <label htmlFor='expire'>
            <Field id='expire' name='expire' />
          </label>
          <fieldset form='card-details'>
            <legend>Exp. Date (MM/YY)</legend>
            <Field id='month' name='month' placeholder='MM' />
            <Field id='year' name='year' placeholder='YY' />
          </fieldset>
          <label htmlFor='cvc'>
            <Field id='cvc' name='cvc' placeholder='e.g. 123' />
          </label>
          <button type='submit'>Confirm</button>
        </Form>
      </Formik>
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
