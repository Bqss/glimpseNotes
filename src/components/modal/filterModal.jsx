import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilterModal } from "../../features/ModalSlice";
import {XMarkIcon} from "@heroicons/react/20/solid";

const FilterModal = ({selectedFilter, handleSelect, handleClear}) => {
  const { displayFilterModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  function closeModal() {
    dispatch(toggleFilterModal(false));
  }

  return (
    <>
      <Transition appear show={displayFilterModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-[2]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[2]">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xs transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-medium leading-6 text-gray-900"
                    >
                      Sort
                    </Dialog.Title>
                    <button className="hover:text-red-600" title="close" onClick={closeModal}>
                      <XMarkIcon/>
                    </button>
                  </div>
                  <div className="mt-2">
                    <div className="mt-4">
                      <h3 className="font-bold ">Priority</h3>
                      <div className="mt-2">
                        <div className="flex gap-2">
                          <input  type="radio" name="filter" id="opt1" value="low" onChange={handleSelect} checked={selectedFilter ==="low"} />
                          <label  htmlFor="opt1">Low to high</label>
                        </div>
                        <div className="flex gap-2">
                          <input type="radio" name="filter" id="opt2" value="high" onChange={handleSelect} checked={selectedFilter ==="high"} />
                          <label  htmlFor="opt2">High to low</label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-bold ">Date</h3>
                      <div className="mt-2">
                        <div className="flex gap-2">
                          <input type="radio" name="filter" id="opt3" value="lastest" onChange={handleSelect} checked={selectedFilter ==="lastest"} />
                          <label  htmlFor="opt3">Sort by lastest</label>
                        </div>
                        <div className="flex gap-2">
                          <input type="radio" name="filter" id="opt4" value="created" onChange={handleSelect} checked={selectedFilter ==="created"} />
                          <label  htmlFor="opt4">Sort by created</label>
                        </div>
                        <div className="flex gap-2">
                          <input type="radio" name="filter" id="opt5" value="edited" onChange={handleSelect} checked={selectedFilter ==="edited"} />
                          <label  htmlFor="opt5">Sort by edited</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex">
                    <button 
                      className=" transition-colors duration-300 ml-auto border bg-red-500 text-white border-red-300 hover:text-red-500 hover:bg-white px-3 py-1 rounded-lg"
                      onClick={handleClear}
                    >
                      Clear
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FilterModal;
