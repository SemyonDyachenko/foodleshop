import { AuthLinkType } from "@/shared/types"
import Input from "@/shared/UI/Input"
import { motion } from "framer-motion"
import React from "react"

type Props = {
  sourceLinkType: AuthLinkType
  opened: boolean
}

const AuthWidget = React.forwardRef<HTMLDivElement, Props>(
  ({ opened, sourceLinkType }, ref) => {
    const visibleStyle = !opened ? "hidden" : ""

    const ChangeAuthType = () => {
      if (sourceLinkType === AuthLinkType.SIGNUP)
        sourceLinkType = AuthLinkType.SIGNIN
      if (sourceLinkType === AuthLinkType.SIGNIN)
        sourceLinkType = AuthLinkType.SIGNUP
    }

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.7 }}
        transition={{ duration: 0.15 }}
        variants={{
          hidden: { opacity: 0.5, transform: "scale(0.5)", top: -100 },
          visible: { opacity: 1, transform: "scale(1.0)", top: 80 },
        }}
        className={`${visibleStyle} w-5/7 absolute top-20 right-20 mx-auto rounded-2xl bg-primary-600 drop-shadow-lg`}
      >
        <div className="p-8">
          <div>
            <div className="flex justify-center text-2xl font-bold text-primary-500">
              Authorization
            </div>
            <div className="flex justify-center text-sm text-gray-400">
              Auth for start to order
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Input title="E-mail" type="email" placeholder="test@info.com" />
            <Input
              title="Password"
              type="password"
              placeholder="Password more 8-letter"
            />
          </div>
          <div className="flex w-full justify-between pt-8 pb-4">
            <div>
              <button className="rounded-full bg-primary-400 px-12 py-4 text-white transition-all hover:bg-primary-500">
                {sourceLinkType === AuthLinkType.SIGNIN ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">
                {" "}
                {sourceLinkType === AuthLinkType.SIGNIN
                  ? "Have not a account ?"
                  : "Already have a account?"}
              </div>
              <a
                href="#"
                onClick={() => ChangeAuthType}
                className="font-bold text-primary-400"
              >
                {sourceLinkType === AuthLinkType.SIGNIN ? "Sign Up" : "Sign In"}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }
)

export default AuthWidget
