type Props = {
  className?: string
  children: React.ReactNode
}

const HText = ({ className, children }: Props) => {
  return (
    <h1
      className={`basis-3/5 font-montserrat font-bold text-primary-300 ${className}`}
    >
      {children}
    </h1>
  )
}

export default HText
