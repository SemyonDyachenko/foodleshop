import { motion } from "framer-motion"
import { RefObject } from "react"
import { SelectedPage } from "./types"
import React from "react"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const ActionButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ onClick, setSelectedPage, className, children }, ref) => {
    return (
      <button
        ref={ref}
        className={`rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
)

export default ActionButton
