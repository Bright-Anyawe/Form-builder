import React from "react";

export default function FormHeader() {
  return (
    <header className="border-b pb-4 mb-6">
      <div className="flex items-center justify-between">
        {/* School logo (replace with actual logo if available) */}
        <div>
          <img src="/file.svg" alt="School Logo" className="h-16" />
        </div>
        <div className="text-center flex-1">
          <h1 className="text-3xl font-bold">THE WINKLES SCHOOL</h1>
          <p className="text-sm">P. O. BOX CO 3516, TEMA</p>
          <p className="text-sm">TEL: 0548494024</p>
          <p className="text-sm">E-mail: thewinklesschool@gmail.com / thewinklesschool@icloud.com</p>
        </div>
      </div>
      <h2 className="text-xl font-bold text-center mt-4 underline">PROGRESS DEVELOPMENT REPORT</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="font-bold">TERM ENDING:</label>
          <input className="ml-2 border-b border-black bg-gray-200 w-32" disabled value="" />
        </div>
        <div>
          <label className="font-bold">CLASS:</label>
          <input className="ml-2 border-b border-black bg-gray-200 w-32" disabled value="" />
        </div>
        <div>
          <label className="font-bold">NAME:</label>
          <input className="ml-2 border-b border-black bg-gray-200 w-48" disabled value="" />
        </div>
        <div>
          <label className="font-bold">NO. ON ROLL:</label>
          <input className="ml-2 border-b border-black bg-gray-200 w-16" disabled value="0" />
        </div>
      </div>
      <div className="mt-2 text-xs">
        <span className="font-bold">KEY:</span> (A = ALWAYS, S = SOMETIMES, N = NEVER)
      </div>
    </header>
  );
} 