function App() {
  return (
    <main>
      <div>0000 0000 0000 0000 Jane Appleseed 00/00</div>
      <div>000</div>
      <div>
        <div>Cardholder Name e.g. Jane Appleseed</div>

        <div>Card Number e.g. 1234 5678 9123 0000</div>

        <div>Exp. Date (MM/YY) MM YY</div>
        <div>CVC e.g. 123</div>
        <button>Confirm</button>
      </div>

      {/* Completed state start */}
      <div>
        Thank you! We've added your card details
        <button>Continue</button>
      </div>

      <div>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by <a href='#'>Your Name Here</a>.
      </div>
    </main>
  )
}

export default App
