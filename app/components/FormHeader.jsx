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
      <div className="flex items-start justify-between mb-4">
        {/* Logo */}
        <div className="flex items-center justify-center h-20 w-20 border-2 border-orange-400 bg-orange-50 rounded mr-6">
          <div className="text-center">
            <div className="text-orange-600 font-bold text-xs">📚</div>
            <div className="text-orange-600 font-bold text-xs">🎓</div>
          </div>
        </div>
        
        {/* School Info - Centered */}
        <div className="flex-1 text-center">
          <h1 className="text-3xl font-bold tracking-wide mb-1">THE WINKLES SCHOOL</h1>
          <p className="text-sm font-medium">P. O. BOX CO 3516, TEMA</p>
          <p className="text-sm font-medium">TEL: 0548494024</p>
          <p className="text-sm font-medium">E-mail: thewinklesschool@gmail.com / thewinklesschool@icloud.com</p>
        </div>
        
        {/* Edit/Save Button */}
        <div className={isExporting ? 'hidden' : 'flex items-center no-print ml-6'}>
          {isEditing ? <SaveIcon onClick={onSave} /> : <EditIcon onClick={onEdit} />}
        </div>
      </div>
      
      {/* Horizontal Line */}
      <div className="border-t-2 border-black my-3" />
      
      {/* Title */}
      <h2 className="text-xl font-bold text-center mb-4 underline">PROGRESS DEVELOPMENT REPORT</h2>
      
      {/* Info Section */}
      <div className="space-y-2 mb-3">
        {/* First Row */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <label className="font-bold text-sm bg-gray-400 text-white px-2 py-1">TERM ENDING:</label>
            {isEditing ? (
              <input 
                className="ml-1 border border-black bg-gray-200 px-2 py-1 text-sm" 
                value={termEnding} 
                onChange={e => onChange("termEnding", e.target.value)} 
              />
            ) : (
              <span className="ml-1 bg-gray-200 border border-black px-2 py-1 text-sm font-medium">{termEnding}</span>
            )}
          </div>
          
          <div className="flex items-center">
            <label className="font-bold text-sm bg-gray-400 text-white px-2 py-1">CLASS:</label>
            {isEditing ? (
              <input 
                className="ml-1 border border-black bg-gray-200 px-2 py-1 text-sm" 
                value={className} 
                onChange={e => onChange("className", e.target.value)} 
              />
            ) : (
              <span className="ml-1 bg-gray-200 border border-black px-2 py-1 text-sm font-medium">{className}</span>
            )}
          </div>
        </div>
        
        {/* Second Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <label className="font-bold text-sm bg-gray-400 text-white px-2 py-1">NAME:</label>
            {isEditing ? (
              <input 
                className="ml-1 border border-black bg-gray-200 px-2 py-1 text-sm w-64" 
                value={name} 
                onChange={e => onChange("name", e.target.value)} 
              />
            ) : (
              <span className="ml-1 bg-gray-200 border border-black px-2 py-1 text-sm font-medium w-64 inline-block">{name}</span>
            )}
          </div>
          
          <div className="flex items-center">
            <label className="font-bold text-sm bg-gray-400 text-white px-2 py-1">NO. ON ROLL:</label>
            {isEditing ? (
              <input 
                className="ml-1 border border-black bg-gray-200 px-2 py-1 text-sm w-12" 
                value={rollNo} 
                onChange={e => onChange("rollNo", e.target.value)} 
              />
            ) : (
              <span className="ml-1 bg-gray-200 border border-black px-2 py-1 text-sm font-medium w-12 inline-block text-center">{rollNo}</span>
            )}
          </div>
        </div>
        
        {/* Third Row - KEY */}
        <div className="flex items-center">
          <label className="font-bold text-sm bg-gray-400 text-white px-2 py-1">KEY:</label>
          <span className="ml-1 text-sm">(A = ALWAYS, S = SOMETIMES, N=NEVER)</span>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="border-t-2 border-black mt-3" />
    </header>
  );
}