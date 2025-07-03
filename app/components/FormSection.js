import React from "react";
import CheckboxGroup from "./CheckboxGroup";

export default function FormSection({ title, fields }) {
  return (
    <section className="mb-8">
      <h3 className="font-bold text-lg text-center underline mb-2">{title}</h3>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-2 py-1 text-left"></th>
            <th className="border px-2 py-1">A</th>
            <th className="border px-2 py-1">S</th>
            <th className="border px-2 py-1">N</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, idx) => (
            <tr key={idx}>
              <td className="border px-2 py-1">{field}</td>
              <td className="border px-2 py-1"><CheckboxGroup /></td>
              <td className="border px-2 py-1"></td>
              <td className="border px-2 py-1"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
} 