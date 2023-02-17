type Props = {
  icon: React.ReactNode
  title?: string
  description?: string
}

const FeatureCard = ({ icon, title, description }: Props) => {
  return (
    <div className="flex w-1/3 items-center justify-between gap-4">
      <div className="flex h-[90px] w-[90px] justify-center rounded-full bg-secondary-400 p-7 text-gray-600">
        {icon}
      </div>
      <div className="mx-3">
        <div className="text-xl font-bold text-gray-600">
          <h2>{title}</h2>
        </div>
        <div className="mt-2 text-sm text-gray-400">{description}</div>
      </div>
    </div>
  )
}

export default FeatureCard
