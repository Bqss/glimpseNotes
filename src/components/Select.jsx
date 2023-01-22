import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

export default function Select({ data, selected, handleChange, name }) {
  return (
    <Listbox  value={selected} onChange={handleChange}>
      <div className="relative mt-1 w-max">
        <div className="flex gap-2 items-center ">
          <Listbox.Label>{name}</Listbox.Label>
          <Listbox.Button className="relative cursor-pointer border rounded-lg bg-white outline-none py-2 pl-3 pr-10 text-left shadow-md focus:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
          </Listbox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          enter="transition ease-in duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >  
          <Listbox.Options className="absolute mt-1 border border-gray-300 ring-2 ring-blue-500/5 max-h-60 w-full divide-y-2 divide-gray-200/60 overflow-auto rounded-md bg-gray-50 py-1 text-base shadow-lg   focus:outline-none sm:text-sm">
            {data.map((v) => (
              <Listbox.Option
                key={v.id}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? "bg-blue-500 text-white" : "text-gray-900"
                  }`
                }
                value={v.val}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${ selected ? "font-medium" : "font-normal"}`}
                    >
                      {v.val}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
