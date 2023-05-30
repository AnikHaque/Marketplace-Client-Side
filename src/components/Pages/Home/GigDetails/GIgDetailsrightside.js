import React from "react";

const GigDetailsrightside = () => {

  return (
    <div class="w-2/3">
  <div class="relative right-0">
    <ul
      class="relative flex list-none flex-wrap rounded-xl bg-blue-gray-50/60 p-1"
      data-tabs="tabs"
      role="list"
    >
      <li class="z-30 flex-auto text-center">
        <a
          class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
          data-tab-target=""
          active=""
          role="tab"
          aria-selected="true"
          aria-controls="app"
        >
          <span class="ml-1">App</span>
        </a>
      </li>
      <li class="z-30 flex-auto text-center">
        <a
          class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
          data-tab-target=""
          role="tab"
          aria-selected="false"
          aria-controls="message"
        >
          <span class="ml-1">Messages</span>
        </a>
      </li>
      <li class="z-30 flex-auto text-center">
        <a
          class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
          data-tab-target=""
          role="tab"
          aria-selected="false"
          aria-controls="settings"
        >
          <span class="ml-1">Settings</span>
        </a>
      </li>
    </ul>
    <div data-tab-content="" class="p-5">
      <div class="block opacity-100" id="app" role="tabpanel">
        <p class="block font-sans text-base font-light leading-relaxed text-inherit text-blue-gray-500 antialiased">
          Because it's about motivating the doers. Because I'm here to follow
          my dreams and inspire other people to follow their dreams, too.
        </p>
      </div>
      <div class="hidden opacity-0" id="message" role="tabpanel">
        <p class="block font-sans text-base font-light leading-relaxed text-inherit text-blue-gray-500 antialiased">
          The reading of all good books is like a conversation with the finest
          minds of past centuries.
        </p>
      </div>
      <div class="hidden opacity-0" id="settings" role="tabpanel">
        <p class="block font-sans text-base font-light leading-relaxed text-inherit text-blue-gray-500 antialiased">
          Comparing yourself to others is the thief of joy.
        </p>
      </div>
    </div>
  </div>
</div>
  );
}
export default GigDetailsrightside;