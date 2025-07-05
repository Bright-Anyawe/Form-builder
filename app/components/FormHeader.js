import React from "react";

const EditIcon = ({ onClick }) => (
  <button onClick={onClick} title="Edit" className="ml-2 text-blue-600 hover:text-blue-800">
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h2v2H7v-2h2z" /></svg>
  </button>
);
const SaveIcon = ({ onClick }) => (
  <button onClick={onClick} title="Save" className="ml-2 text-green-600 hover:text-green-800">
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
  </button>
);

export default function FormHeader({
  termEnding,
  className,
  name,
  rollNo,
  isEditing,
  onEdit,
  onSave,
  onChange,
  isExporting
}) {
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
        <div className={isExporting ? 'hidden' : 'flex items-center no-print'}>
          {isEditing ? <SaveIcon onClick={onSave} /> : <EditIcon onClick={onEdit} />}
        </div>
      </div>
      <h2 className="text-xl font-bold text-center mt-4 underline">PROGRESS DEVELOPMENT REPORT</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="font-bold">TERM ENDING:</label>
          {isEditing ? (
            <input className="ml-2 border-b border-black bg-gray-200 w-32" value={termEnding} onChange={e => onChange("termEnding", e.target.value)} />
          ) : (
            <span className="ml-2">{termEnding}</span>
          )}
        </div>
        <div>
          <label className="font-bold">CLASS:</label>
          {isEditing ? (
            <input className="ml-2 border-b border-black bg-gray-200 w-32" value={className} onChange={e => onChange("className", e.target.value)} />
          ) : (
            <span className="ml-2">{className}</span>
          )}
        </div>
        <div>
          <label className="font-bold">NAME:</label>
          {isEditing ? (
            <input className="ml-2 border-b border-black bg-gray-200 w-48" value={name} onChange={e => onChange("name", e.target.value)} />
          ) : (
            <span className="ml-2">{name}</span>
          )}
        </div>
        <div>
          <label className="font-bold">NO. ON ROLL:</label>
          {isEditing ? (
            <input className="ml-2 border-b border-black bg-gray-200 w-16" value={rollNo} onChange={e => onChange("rollNo", e.target.value)} />
          ) : (
            <span className="ml-2">{rollNo}</span>
          )}
        </div>
      </div>
      <div className="mt-2 text-xs">
        <span className="font-bold">KEY:</span> (A = ALWAYS, S = SOMETIMES, N = NEVER)
      </div>
    </header>
  );
} 