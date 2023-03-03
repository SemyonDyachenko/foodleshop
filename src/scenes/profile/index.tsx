import React from "react"

type Props = {}

const ProfileSection = (props: Props) => {
  const inputStyles =
    " bg-secondary-400 px-6 py-3 text-white outline-none rounded-lg"
  return (
    <section
      id="profile"
      className="gap-16 bg-primary-600 py-10 pb-20 md:h-full"
    >
      <div className="z-10 mx-auto mt-10 w-5/6">
        <div>
          <h1 className="flex gap-2 py-10 text-3xl">
            Hello, <p className="text-primary-500">Semyon Dyachenko</p>
          </h1>
        </div>
        <div className="flex w-full ">
          <div className="flex max-w-[500px] flex-wrap justify-between gap-4 pr-4">
            <input className={`${inputStyles}`} placeholder="First Name" />
            <input className={`${inputStyles}`} placeholder="Last Name" />
            <input className={`${inputStyles}`} placeholder="Phone Number" />
            <input className={`${inputStyles}`} placeholder="E-mail" />
            <input
              className={`${inputStyles} w-full`}
              placeholder="Your Address"
            />
            <button className="w-full rounded-xl bg-primary-500 p-4 text-lg text-white transition-all hover:bg-primary-300">
              Save Changes
            </button>
          </div>

          <div>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection
