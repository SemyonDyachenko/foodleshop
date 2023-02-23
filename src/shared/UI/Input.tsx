type Props = {
  title: string
  type: string
  placeholder: string
}

const Input = ({ title, type, placeholder }: Props) => {
  return (
    <div>
      <div className="text-md py-2 text-gray-400">{title}</div>
      <div>
        <input
          className="h-[40px] w-[350px] rounded-lg bg-secondary-500 p-4 text-white outline-none placeholder:text-gray-200"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default Input
