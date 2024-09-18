import React, { ReactElement, ReactNode } from 'react'

type ComponentTypes = {
  children: any
  title: string
  text?: string | ReactNode
  description?: string
}
export default function ComponentTemplate({
  children,
  title,
  description,
}: ComponentTypes) {
  return (
    <>
      <section className="relative flex h-full w-full items-start justify-center px-2">
        <div className="flex w-full flex-col gap-10 xl:w-1/2">
          <span className="space-y-2 px-2 md:p-0">
            <h2 className="title">{title}</h2>
            {description && (
              <p className="text-md text-slate-200">{description}</p>
            )}
          </span>
          <div className="flex w-full flex-col items-center justify-center gap-10">
            {children}
          </div>
        </div>
      </section>
    </>
  )
}
