

function CardTitle({variant='medium',className, children}) {
    const variants = {
        xs:'text-base font-medium',
        small: 'text-lg font-medium',
        medium: 'text-2xl font-semibold',
        large: 'text-3xl font-bold'
    }
  return (
    <>
        <h2 className={`${className} ${variants[variant]}`}>{children}</h2>
    </>
  )
}

export default CardTitle