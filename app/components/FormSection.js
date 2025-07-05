"use client";
import React, { useState } from "react";
import CheckboxGroup from "./CheckboxGroup";

const PlusIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
);
const DeleteIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);
const PencilIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h2v2H7v-2h2z" /></svg>
);
const SaveIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
);

export default function FormSection({ title, fields, onEditField, onDeleteField, onCheckbox, onAddField, isCustom, onEditSectionTitle, onDeleteSection, isExporting }) {
  const [editIdx, setEditIdx] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Add new row to section
  const handleAddRow = () => {
    onAddField("");
    setEditIdx(fields.length); // Immediately edit the new row
    setEditValue("");
  };

  // Start editing a row
  const handleEdit = (idx) => {
    setEditIdx(idx);
    setEditValue(fields[idx].label);
  };

  // Save edited row
  const handleSave = (idx) => {
    onEditField(idx, editValue);
    setEditIdx(null);
    setEditValue("");
  };

  // Cancel editing
  const handleCancel = () => {
    setEditIdx(null);
    setEditValue("");
  };

  return (
    <section className="mb-8 border-2 border-black p-0 bg-white shadow">
      {/* Header row: title centered, icons right */}
      <div className="flex items-center justify-between border-b-2 border-black px-4 pt-2 pb-1">
        <div className="flex-1 flex justify-center">
          {isCustom ? (
            <input
              type="text"
              className="font-bold text-lg underline text-center border-b border-gray-400 focus:outline-none w-full max-w-xl"
              placeholder="Add your Title"
              value={title}
              onChange={e => onEditSectionTitle(e.target.value)}
            />
          ) : (
            <h3 className="font-bold text-lg text-center w-full max-w-xl">{title}</h3>
          )}
        </div>
        <div className="flex items-center gap-2 ml-2 no-print">
          <button title="Add row" onClick={handleAddRow} className="text-blue-600 hover:bg-blue-100 rounded p-1"><PlusIcon /></button>
          <button title="Delete section" onClick={onDeleteSection} className="text-red-600 hover:bg-red-100 rounded p-1"><DeleteIcon /></button>
        </div>
      </div>
      <table className="w-full border-2 border-black border-collapse">
        <thead>
          <tr>
            <th className="border-2 border-black px-2 py-1 text-left font-bold">Item</th>
            <th className="border-2 border-black px-2 py-1 font-bold">A</th>
            <th className="border-2 border-black px-2 py-1 font-bold">S</th>
            <th className="border-2 border-black px-2 py-1 font-bold">N</th>
            {!isExporting && <th className="border-2 border-black px-2 py-1 font-bold no-print">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {fields.map((field, idx) => (
            <tr key={idx}>
              <td className="border-2 border-black px-2 py-1">
                {editIdx === idx ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      className="w-full border px-1 py-0.5 rounded"
                      value={editValue}
                      placeholder={isCustom && !field.label ? "Add your data" : undefined}
                      onChange={e => setEditValue(e.target.value)}
                    />
                    <button title="Save" onClick={() => handleSave(idx)} className="text-green-600 no-print"><SaveIcon /></button>
                    <button title="Cancel" onClick={handleCancel} className="text-red-600 no-print">✗</button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>{field.label || (isCustom ? <span className="text-gray-400">Add your data</span> : "")}</span>
                  </div>
                )}
              </td>
              <td className="border-2 border-black px-2 py-1 text-center align-middle">
                <CheckboxGroup checked={field.checked === "A"} onChange={() => onCheckbox(idx, "A")} />
              </td>
              <td className="border-2 border-black px-2 py-1 text-center align-middle">
                <CheckboxGroup checked={field.checked === "S"} onChange={() => onCheckbox(idx, "S")} />
              </td>
              <td className="border-2 border-black px-2 py-1 text-center align-middle">
                <CheckboxGroup checked={field.checked === "N"} onChange={() => onCheckbox(idx, "N")} />
              </td>
              {!isExporting && (
                <td className="border-2 border-black px-2 py-1 text-center align-middle no-print">
                  {editIdx === idx ? null : (
                    <>
                      <button title="Edit" onClick={() => handleEdit(idx)} className="text-blue-600 mr-2 no-print"><PencilIcon /></button>
                      <button title="Delete row" onClick={() => onDeleteField(idx)} className="text-red-600 no-print"><DeleteIcon /></button>
                    </>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
} 