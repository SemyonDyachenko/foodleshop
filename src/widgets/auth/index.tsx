import { AuthLinkType } from "@/shared/types"
import Input from "@/shared/UI/Input"
import { emailPattern } from "@/utils/emailValid"
import { motion } from "framer-motion"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"

type Props = {
  sourceLinkType: AuthLinkType
  opened: boolean
}

const AuthWidget = React.forwardRef<HTMLDivElement, Props>(
  ({ opened, sourceLinkType }, ref) => {
    const visibleStyle = !opened ? "hidden" : ""
    const inputStyles =
      "h-[40px] w-[350px] rounded-lg bg-secondary-500 p-4 text-white outline-none placeholder:text-gray-200"

    const ChangeAuthType = () => {
      if (sourceLinkType === AuthLinkType.SIGNUP)
        sourceLinkType = AuthLinkType.SIGNIN
      if (sourceLinkType === AuthLinkType.SIGNIN)
        sourceLinkType = AuthLinkType.SIGNUP
    }

    const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
    } = useForm({ mode: "onBlur" })

    const onSubmit = (data: any) => {
      const { email, password } = data
      if (
        email === "semyondyachenko@gmail.com" &&
        password === "L0nd0nvecter359!"
      ) {
        localStorage.setItem("auth", email)
        reset()
        location.reload()
      }
    }
    useEffect(() => {
      if (!opened) {
        reset()
      }
    }, [])

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
        <form onSubmit={handleSubmit(onSubmit)} className="p-8">
          <div>
            <div className="flex justify-center text-2xl font-bold text-primary-500">
              Authorization
            </div>
            <div className="flex justify-center text-sm text-gray-400">
              Auth for start to order
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <div className="text-md py-2 text-gray-400">E-mail</div>
              <div>
                <input
                  className={`${inputStyles}`}
                  type="text"
                  placeholder="info@app.com"
                  {...register("email", {
                    required: "Email field is required",
                    pattern: {
                      value: emailPattern,
                      message: "Email example: info@app.com",
                    },
                  })}
                />
              </div>
              <div
                className={`${
                  !errors?.email && "hidden"
                } h-[30px] py-2 text-sm text-primary-500`}
              >
                {errors?.email && (
                  <p>{errors?.email?.message?.toString() || "Error"}</p>
                )}
              </div>
            </div>
            <div>
              <div className="text-md py-2 text-gray-400">Password</div>
              <div>
                <input
                  className={`${inputStyles}`}
                  type="password"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Password field is required",
                    minLength: {
                      value: 8,
                      message: "Password need more 8-letters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,40}$/,
                      message:
                        "The password must contain one uppercase, number and symbol",
                    },
                  })}
                />
              </div>
              <div
                className={`${
                  !errors?.password && "hidden"
                }   max-w-[350px] py-4 text-sm text-primary-500`}
              >
                {errors?.password && (
                  <p>
                    {errors?.password?.message?.toString() || "Password error"}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between pt-8 pb-4">
            <div>
              <button
                type="submit"
                disabled={!isValid}
                className="rounded-full bg-primary-400 px-12 py-4 text-white transition-all hover:bg-primary-500 disabled:bg-primary-200"
              >
                {sourceLinkType === AuthLinkType.SIGNIN ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">
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
        </form>
      </motion.div>
    )
  }
)

export default AuthWidget
