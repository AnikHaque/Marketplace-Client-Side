import React from 'react';
// import { Select, Option } from "@material-tailwind/react";


const AddOverview = () => {
    return (
        <div>
            <div>
            <form novalidate="" action="" className="container border-lg flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid  rounded-md shadow-sm lg:px-28 lg:py-9">
		<fieldset className="grid grid-cols-4 gap-6 p-6  bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="text-lg font-semibold">Gig title</p>
				<p className="text-sm">As your Gig storefront, your title is the most important place to include keywords that buyers would likely use to search for a service like yours.</p>
			</div>
            <div className="col-span-full sm:col-span-3">
					<input id="firstname" type="text" placeholder="I will do something , I do well" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 p-9" />
				</div>
		</fieldset>
		<div className="grid grid-cols-4 gap-6 p-6  bg-gray-50">
			<div className="">
				<p className="text-lg font-semibold">Category</p>
				<p className="text-sm">Choose the category and sub-category most suitable for your Gig.</p>
			</div>
            <div className="col-span-full sm:col-span-3">
            <select
    name="HeadlineAct"
    id="HeadlineAct"
    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
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
            
		</div>
        
	</form>
        </div>
        {/* <section className="p-6 bg-gray-50 text-gray-50">
	<form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="firstname" className="text-sm">First name</label>
					<input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="lastname" className="text-sm">Last name</label>
					<input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="email" className="text-sm">Email</label>
					<input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="address" className="text-sm">Address</label>
					<input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="city" className="text-sm">City</label>
					<input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="state" className="text-sm">State / Province</label>
					<input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="zip" className="text-sm">ZIP / Postal</label>
					<input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
				</div>
			</div>
		</fieldset>
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Profile</p>
				<p className="text-xs">Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="username" className="text-sm">Username</label>
					<input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="website" className="text-sm">Website</label>
					<input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="bio" className="text-sm">Bio</label>
					<textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" spellcheck="false"></textarea>
				</div>
			</div>
		</fieldset>
	</form>
</section> */}
        </div>
    );
};

export default AddOverview;