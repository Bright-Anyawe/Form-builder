import React from "react";
import EditIcon from "./EditIcon";
import SaveIcon from "./SaveIcon";

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
    <header className="border-b-2 border-black pb-2 mb-6">
      {/* Top Row: Logo + School Info */}
      <div className="flex items-center justify-between mb-2">
        {/* Logo Placeholder */}
        <div className="flex items-center justify-center h-20 w-20 border-2 border-orange-400 bg-orange-50 rounded mr-4">
          <span className="text-xs text-orange-400">Logo</span>
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-4xl font-extrabold tracking-wide mb-1">THE WINKLES SCHOOL</h1>
          <p className="text-base font-medium">P. O. BOX CO 3516, TEMA</p>
          <p className="text-base font-medium">TEL: 0548494024</p>
          <p className="text-base font-medium">E-mail: thewinklesschool@gmail.com / thewinklesschool@icloud.com</p>
        </div>
        <div className={isExporting ? 'hidden' : 'flex items-center no-print ml-4'}>
          {isEditing ? <SaveIcon onClick={onSave} /> : <EditIcon onClick={onEdit} />}
        </div>
      </div>
      {/* Divider */}
      <div className="border-t-2 border-black my-2" />
      {/* Title */}
      <h2 className="text-2xl font-extrabold text-center mt-2 mb-2 underline">PROGRESS DEVELOPMENT REPORT</h2>
      {/* Info Row */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-1">
        <div className="flex items-center">
          <label className="font-bold text-base">TERM ENDING:</label>
          {isEditing ? (
            <input className="ml-2 border-b-2 border-black bg-gray-200 w-40 px-2 py-0.5" value={termEnding} onChange={e => onChange("termEnding", e.target.value)} />
          ) : (
            <span className="ml-2 text-base font-semibold">{termEnding}</span>
          )}
        </div>
        <div className="flex items-center">
          <label className="font-bold text-base">CLASS:</label>
          {isEditing ? (
            <input className="ml-2 border-b-2 border-black bg-gray-200 w-40 px-2 py-0.5" value={className} onChange={e => onChange("className", e.target.value)} />
          ) : (
            <span className="ml-2 text-base font-semibold">{className}</span>
          )}
        </div>
        <div className="flex items-center">
          <label className="font-bold text-base">NAME:</label>
          {isEditing ? (
            <input className="ml-2 border-b-2 border-black bg-gray-200 w-64 px-2 py-0.5" value={name} onChange={e => onChange("name", e.target.value)} />
          ) : (
            <span className="ml-2 text-base font-semibold">{name}</span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <span>
            <span className="font-bold text-base">KEY:</span>
            <span className="ml-1 text-base">(A = ALWAYS, S = SOMETIMES, N = NEVER)</span>
          </span>
          <span className="flex items-center ml-4">
            <label className="font-bold text-base">NO. ON ROLL:</label>
            {isEditing ? (
              <input className="ml-2 border-b-2 border-black bg-gray-200 w-12 px-2 py-0.5" value={rollNo} onChange={e => onChange("rollNo", e.target.value)} />
            ) : (
              <span className="ml-2 text-base font-semibold">{rollNo}</span>
            )}
          </span>
        </div>
      </div>
      <div className="border-t-2 border-black mt-1" />
    </header>
  );
} 