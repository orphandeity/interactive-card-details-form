import CardInput from './CardInput'
import { Logo } from './Icons'

function App() {
  return (
    <main className='h-screen bg-main-mobile bg-top bg-no-repeat md:grid md:grid-cols-2 md:bg-main-desktop md:bg-left'>
      {/* Background Card */}
      <div className='my-auto uppercase tracking-widest text-white'>
        <CardFront />
        <CardBack />
      </div>

      {/* form */}
      <CardInput />
    </main>
  )
}

// Background Cards
const CardFront = () => {
  return (
    <div className='relative z-50 flex h-[176px] max-w-[320px] translate-y-3/4 translate-x-4 flex-col justify-between rounded-lg bg-card-front bg-contain bg-center bg-no-repeat px-8 py-8 shadow-xl md:h-[246px] md:max-w-md md:translate-x-[160px] md:p-8'>
      <Logo />
      <div>
        <div className='flex max-w-[374px] justify-between pt-4 text-base md:text-2xl'>
          <span>0000</span>
          <span>0000</span>
          <span>0000</span>
          <span>0000</span>
        </div>
        <div className='flex justify-between pt-1 text-[10px] md:pt-4 md:text-sm'>
          <div className=''>Jane Appleseed</div>
          <div>00/00</div>
        </div>
      </div>
    </div>
  )
}

const CardBack = () => {
  return (
    <div className='-z-10 mt-6 flex h-[176px] max-w-[320px] translate-x-10 -translate-y-full items-center justify-end rounded-lg bg-card-back bg-cover bg-center bg-no-repeat p-8 shadow-xl md:h-[246px] md:max-w-md md:translate-x-[248px]'>
      <div className='text-sm md:-translate-x-4 md:text-base'>000</div>
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
