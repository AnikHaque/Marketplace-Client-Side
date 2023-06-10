import React from 'react';
import { Checkbox } from "@material-tailwind/react";


const AddPricing = () => {
    return (
        <div>
            <div className="overflow-x-auto lg:px-24 lg:py-16">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
 

    <tbody className="divide-y divide-gray-200">
        {/* Type price */}
      <tr className='border'>
        <td className="whitespace-nowrap p-9 font-medium text-gray-900">
          
        </td>
        <td className="whitespace-nowrap border px-4 py-2 text-gray-700">Basic</td>
        <td className="whitespace-nowrap border px-4 py-2 text-gray-700">Standard</td>
        <td className="whitespace-nowrap border px-4 py-2 text-gray-700">Premium</td>       
      </tr>

      {/* Title */}
      <tr>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        Name your package
      </td>
        <td className="whitespace-nowrap font-medium text-gray-900">
            <div>
                <label class="sr-only" for="name"></label>
                <input
                class="w-full  border-gray-200 p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
                />
            </div>
        </td>     
        <td className="whitespace-nowrap font-medium text-gray-900">
            <div>
                <label class="sr-only" for="name"></label>
                <input
                class="w-full  border-gray-200 p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
                />
            </div>
        </td>     
        <td className="whitespace-nowrap font-medium text-gray-900">
            <div>
                <label class="sr-only" for="name"></label>
                <input
                class="w-full  border-gray-200 p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
                />
            </div>
        </td>     
      </tr>

      {/* Description */}
      <tr>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        Description
      </td>
      <td className="whitespace-nowrap font-medium text-gray-500">
        <div>
            <label class="sr-only" for="message"></label>

            <textarea
              class="w-full border-gray-200 p-3 text-sm"
              placeholder="Description"
              rows="8"
              id="message"
            ></textarea>
          </div>
        </td>    
        <td className="whitespace-nowrap font-medium text-gray-500">
        <div>
            <label class="sr-only" for="message">Message</label>

            <textarea
              class="w-full border-gray-200 p-3 text-sm"
              placeholder="Description"
              rows="8"
              id="message"
            ></textarea>
          </div>
        </td>     
        <td className="whitespace-nowrap font-medium text-gray-500">
        <div>
            <label class="sr-only" for="message">Message</label>

            <textarea
              class="w-full border-gray-200 p-3 text-sm"
              placeholder="Description"
              rows="8"
              id="message"
            ></textarea>
          </div>
        </td>     
      </tr>

      {/* Delivery Time */}
      <tr>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        Delivery Time
      </td>
      <td className="whitespace-nowrap font-medium text-gray-500">
      <div className="col-span-full sm:col-span-3">
            <select
    name="HeadlineAct"
    id="HeadlineAct"
    className=" w-full border-gray-300 text-gray-700 sm:text-sm"
  >
    <option value="">Please select</option>
    <option value="JM">John Mayer</option>
    <option value="SRV">Stevie Ray Vaughn</option>
    <option value="JH">Jimi Hendrix</option>
    <option value="BBK">B.B King</option>
    <option value="AK">Albert King</option>
    <option value="BG">Buddy Guy</option>
    <option value="EC">Eric Clapton</option>
  </select>
				</div>
        </td>    
        <td className="whitespace-nowrap font-medium text-gray-500">
        <div className="col-span-full sm:col-span-3">
            <select
    name="HeadlineAct"
    id="HeadlineAct"
    className=" w-full  border-gray-300 text-gray-700 sm:text-sm"
  >
    <option value="">Please select</option>
    <option value="JM">John Mayer</option>
    <option value="SRV">Stevie Ray Vaughn</option>
    <option value="JH">Jimi Hendrix</option>
    <option value="BBK">B.B King</option>
    <option value="AK">Albert King</option>
    <option value="BG">Buddy Guy</option>
    <option value="EC">Eric Clapton</option>
  </select>
				</div>
        </td>     
        <td className="whitespace-nowrap font-medium text-gray-500">
        <div className="col-span-full sm:col-span-3">
            <select
    name="HeadlineAct"
    id="HeadlineAct"
    className=" w-full  border-gray-300 text-gray-700 sm:text-sm"
  >
    <option value="">Please select</option>
    <option value="JM">John Mayer</option>
    <option value="SRV">Stevie Ray Vaughn</option>
    <option value="JH">Jimi Hendrix</option>
    <option value="BBK">B.B King</option>
    <option value="AK">Albert King</option>
    <option value="BG">Buddy Guy</option>
    <option value="EC">Eric Clapton</option>
  </select>
				</div>
        </td>     
      </tr>

      {/* Revisions */}
      <tr>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
      Revisions
      </td>
      <td className="whitespace-nowrap font-medium text-gray-500">
      <div className="col-span-full sm:col-span-3">
            <select
    name="HeadlineAct"
    id="HeadlineAct"
    className=" w-full border-gray-300 text-gray-700 sm:text-sm"
  >
    <option value="">Please select</option>
    <option value="JM">John Mayer</option>
    <option value="SRV">Stevie Ray Vaughn</option>
    <option value="JH">Jimi Hendrix</option>
    <option value="BBK">B.B King</option>
    <option value="AK">Albert King</option>
    <option value="BG">Buddy Guy</option>
    <option value="EC">Eric Clapton</option>
  </select>
				</div>
        </td>    
        <td className="whitespace-nowrap font-medium text-gray-500">
        <div className="col-span-full sm:col-span-3">
            <select
    name="HeadlineAct"
    id="HeadlineAct"
    className=" w-full  border-gray-300 text-gray-700 sm:text-sm"
  >
    <option value="">Please select</option>
    <option value="JM">John Mayer</option>
    <option value="SRV">Stevie Ray Vaughn</option>
    <option value="JH">Jimi Hendrix</option>
    <option value="BBK">B.B King</option>
    <option value="AK">Albert King</option>
    <option value="BG">Buddy Guy</option>
    <option value="EC">Eric Clapton</option>
  </select>
				</div>
        </td>     
        <td className="whitespace-nowrap font-medium text-gray-500">
        <div className="col-span-full sm:col-span-3">
            <select
    name="HeadlineAct"
    id="HeadlineAct"
    className=" w-full  border-gray-300 text-gray-700 sm:text-sm"
  >
    <option value="">Please select</option>
    <option value="JM">John Mayer</option>
    <option value="SRV">Stevie Ray Vaughn</option>
    <option value="JH">Jimi Hendrix</option>
    <option value="BBK">B.B King</option>
    <option value="AK">Albert King</option>
    <option value="BG">Buddy Guy</option>
    <option value="EC">Eric Clapton</option>
  </select>
				</div>
        </td>     
      </tr>

      {/* Number of Concept */}
      <tr>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
      Number of Concept
      </td>
      <td className="whitespace-nowrap font-medium text-gray-500">
      <div className="col-span-full sm:col-span-3">
            <select
    name="HeadlineAct"
    id="HeadlineAct"
    className=" w-full border-gray-300 text-gray-700 sm:text-sm"
  >
    <option value="">Please select</option>
    <option value="JM">John Mayer</option>
    <option value="SRV">Stevie Ray Vaughn</option>
    <option value="JH">Jimi Hendrix</option>
    <option value="BBK">B.B King</option>
    <option value="AK">Albert King</option>
    <option value="BG">Buddy Guy</option>
    <option value="EC">Eric Clapton</option>
  </select>
				</div>
        </td>    
        <td className="whitespace-nowrap font-medium text-gray-500">
        <div className="col-span-full sm:col-span-3">
            <select
    name="HeadlineAct"
    id="HeadlineAct"
    className=" w-full  border-gray-300 text-gray-700 sm:text-sm"
  >
    <option value="">Please select</option>
    <option value="JM">John Mayer</option>
    <option value="SRV">Stevie Ray Vaughn</option>
    <option value="JH">Jimi Hendrix</option>
    <option value="BBK">B.B King</option>
    <option value="AK">Albert King</option>
    <option value="BG">Buddy Guy</option>
    <option value="EC">Eric Clapton</option>
  </select>
				</div>
        </td>     
        <td className="whitespace-nowrap font-medium text-gray-500">
        <div className="col-span-full sm:col-span-3">
            <select
    name="HeadlineAct"
    id="HeadlineAct"
    className=" w-full  border-gray-300 text-gray-700 sm:text-sm"
  >
    <option value="">Please select</option>
    <option value="JM">John Mayer</option>
    <option value="SRV">Stevie Ray Vaughn</option>
    <option value="JH">Jimi Hendrix</option>
    <option value="BBK">B.B King</option>
    <option value="AK">Albert King</option>
    <option value="BG">Buddy Guy</option>
    <option value="EC">Eric Clapton</option>
  </select>
				</div>
        </td>     
      </tr>

      {/* Vector File */}
      <tr>
      <td className="whitespace-nowrap py-7 pl-4 text-gray-700">
      Vector File
      </td>
      <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>    
        <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>  
        <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>      
      </tr>

      {/* Printable File */}
      <tr>
      <td className="whitespace-nowrap py-7 pl-4 text-gray-700">
      Printable File
      </td>
      <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>    
        <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>  
        <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>      
      </tr>

      {/* 3D Mockup */}
      <tr>
      <td className="whitespace-nowrap py-7 pl-4 text-gray-700">
      3D Mockup
      </td>
      <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>    
        <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>  
        <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>      
      </tr>

      {/* Source File */}
      <tr>
      <td className="whitespace-nowrap py-7 pl-4 text-gray-700">
      Source File 
      </td>
      <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>    
        <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>  
        <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>      
      </tr>

      {/* Stationary Design */}
      <tr>
      <td className="whitespace-nowrap py-7 pl-4 text-gray-700">
      Stationary Design
      </td>
      <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>    
        <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>  
        <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>      
      </tr>

      {/* Social Media Kit */}
      <tr>
      <td className="whitespace-nowrap py-7 pl-4 text-gray-700">
      Social Media Kit
      </td>
      <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>    
        <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>  
        <td className="whitespace-nowrap border text-center font-medium text-gray-500">
      <Checkbox  />
        </td>      
      </tr>

      {/* Title */}
      <tr>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        Price
      </td>
        <td className="whitespace-nowrap font-medium text-gray-900">
            <div>
                <label class="sr-only" for="name"></label>
                <input
                class="w-full  border-gray-200 p-3 text-sm"
                placeholder="$"
                type="text"
                id="name"
                />
            </div>
        </td>     
        <td className="whitespace-nowrap font-medium text-gray-900">
            <div>
                <label class="sr-only" for="name"></label>
                <input
                class="w-full  border-gray-200 p-3 text-sm"
                placeholder="$"
                type="text"
                id="name"
                />
            </div>
        </td>     
        <td className="whitespace-nowrap font-medium text-gray-900">
            <div>
                <label class="sr-only" for="name"></label>
                <input
                class="w-full  border-gray-200 p-3 text-sm"
                placeholder="$"
                type="text"
                id="name"
                />
            </div>
        </td>     
      </tr>

    </tbody>
  </table>
</div>
        </div>
    );
};

export default AddPricing;