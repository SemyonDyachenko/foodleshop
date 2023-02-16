type Props = {
  children: string
}

const HText = ({ children }: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-4xl font-bold text-primary-300">
      {children}
    </h1>
  )
}

export default HText
