import React, { ReactElement } from 'react'

type TitleTypes = {
  children: string
  description?: string | ReactElement
}
export default function ComponentTitle({ children, description }: TitleTypes) {
  return (
    <>
      <div className="space-y-4">
        <h2 className="text-5xl text-center font-normal uppercase text-primary-200">
          {children}
        </h2>
        {description && (
          <p className="w-full text-center text-xl text-gray-400 xl:w-[30em]">
            {description}
          </p>
        )}
      </div>
    </>
  )
}
