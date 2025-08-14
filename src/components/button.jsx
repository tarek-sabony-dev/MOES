'use client'

function Button ({ children, action, className}) {
  return (
    <>
      <button onClick={action} className={`w-full h-fit px-6 py-3 rounded-lg border text-opacity-100 font-semibold base bg-transparent hover:bg-white hover:text-black transition-colors ${className} `}>
        {children}
      </button>
    </>
  )
}

function FitButton ({ children, action, className}) {
  return (
    <>
      <button onClick={action} className={`w-fit h-fit px-6 py-3 rounded-lg border text-opacity-100 font-semibold base bg-transparent hover:bg-white hover:text-black transition-colors ${className} `}>
        {children}
      </button>
    </>
  )
}

export {Button, FitButton}