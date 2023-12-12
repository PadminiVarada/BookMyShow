import { Disclosure } from '@headlessui/react'
import { BiChevronUp,BiChevronDown } from "react-icons/bi";

const PlaysFilters=(props)=>{
  return (
    <Disclosure>

      {({ open })=>(
      <>
      <div className="bg-gray-100 my-4 mr-4 py-2 px-1 text-s ">
        <Disclosure.Button className="py-2 flex items-center gap-3 ">
          {open ? <BiChevronUp />: <BiChevronDown />}
           <span className={open ? "text-red-600" : "text-grey-700"}>{props.title}</span>
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500 ">
         <div className="flex items-center gap-3 flex-wrap">
         {props.tags.map((tags)=>(
           <>
           <div className="border-2 border-grey-400 p-2">
            <span className="text-red-600">{tags}</span>
          </div>
           </>
         ))}
         </div>
         </Disclosure.Panel>
        </div>
        </>
      )}
      </Disclosure>
  );
}
export default PlaysFilters;
