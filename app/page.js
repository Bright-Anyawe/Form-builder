"use client";
import React, { useState, useRef } from "react";
import FormHeader from "./components/FormHeader";
import FormSection from "./components/FormSection";

const defaultSections = [
  {
    title: "PHYSICAL DEVELOPMENT",
    fields: [
      { label: "Can play actively", checked: "" },
      { label: "Enjoy outdoor", checked: "" },
      { label: "Manipulates playing with educational toys easily", checked: "" },
      { label: "Can throw and kick", checked: "" },
    ],
  },
  {
    title: "HEALTH",
    fields: [
      { label: "Can wash hands", checked: "" },
      { label: "Can indicate toilet needs", checked: "" },
      { label: "Eat sufficient food", checked: "" },
      { label: "Eat independently", checked: "" },
      { label: "Understand and stay away from common danger", checked: "" },
    ],
  },
  {
    title: "EMOTIONAL DEVELOPMENT",
    fields: [
      { label: "Does child remain cheerful", checked: "" },
      { label: "Mix with others", checked: "" },
      { label: "Show cooperativeness", checked: "" },
      { label: "Share things with others", checked: "" },
      { label: "Like solitary play", checked: "" },
      { label: "Act aggressively", checked: "" },
    ],
  },
  {
    title: "COGNITIVE, LANGUAGE AND NUMERACY DEVELOPMENT",
    fields: [
      { label: "Concentration following actively through to conclusion", checked: "" },
      { label: "Communicates with others in a clear and effective way", checked: "" },
      { label: "Associates sound with objects, animals, people", checked: "" },
      { label: "Discover common feature/differences of objects and shapes", checked: "" },
      { label: "Understand basic concepts such as big, small, long, many", checked: "" },
      { label: "Can use words, gestures to express needs", checked: "" },
      { label: "Can tell differences in smell", checked: "" },
      { label: "Recognise absence, presence of people", checked: "" },
      { label: "Can tell differences in taste", checked: "" },
      { label: "Can read, identify, form and write words and sentences", checked: "" },
      { label: "Can count, say, identify and write numerals in words and figure 1-100", checked: "" },
      { label: "Solve simple puzzle (sorting /matching)", checked: "" },
    ],
  },
  {
    title: "MUSIC, ART AND CREATIVITY",
    fields: [
      { label: "Enjoys music, singing and dancing", checked: "" },
      { label: "Enjoys painting, drawing and colouring", checked: "" },
      { label: "Identify basic and secondary colours", checked: "" },
      { label: "Enjoys reciting rhymes", checked: "" },
    ],
  },
];

const PdfIcon = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /><rect x="6" y="6" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/><text x="12" y="16" textAnchor="middle" fontSize="8" fill="currentColor">PDF</text></svg>
);

const EditIcon = ({ onClick }) => (
  <button onClick={onClick} title="Edit" className="ml-2 text-blue-600 hover:text-blue-800 no-print">
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h2v2H7v-2h2z" /></svg>
  </button>
);
const SaveIcon = ({ onClick }) => (
  <button onClick={onClick} title="Save" className="ml-2 text-green-600 hover:text-green-800 no-print">
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
  </button>
);

export default function Home() {
  const [sections, setSections] = useState(defaultSections);
  const [conduct, setConduct] = useState("");
  const [remarks, setRemarks] = useState("");
  const [attendance, setAttendance] = useState("");
  const [attendanceOutOf, setAttendanceOutOf] = useState("");
  const [classTeacher, setClassTeacher] = useState("");
  const [nextTerm, setNextTerm] = useState("");
  const [headerEdit, setHeaderEdit] = useState(false);
  const [footerEdit, setFooterEdit] = useState(false);
  const [headerFields, setHeaderFields] = useState({
    termEnding: "",
    className: "",
    name: "",
    rollNo: "0",
  });
  const formRef = useRef();
  const [isExporting, setIsExporting] = useState(false);

  const handleAddSection = () => {
    setSections([
      ...sections,
      {
        title: "",
        fields: [
          { label: "", checked: "" },
        ],
        isCustom: true,
      },
    ]);
  };

  const handleAddField = (sectionIdx, fieldLabel) => {
    const updated = [...sections];
    updated[sectionIdx].fields.push({ label: fieldLabel, checked: "" });
    setSections(updated);
  };

  const handleDeleteSection = (sectionIdx) => {
    const updated = [...sections];
    updated.splice(sectionIdx, 1);
    setSections(updated);
  };

  const handleEditField = (sectionIdx, fieldIdx, value) => {
    const updated = [...sections];
    updated[sectionIdx].fields[fieldIdx].label = value;
    setSections(updated);
  };

  const handleDeleteField = (sectionIdx, fieldIdx) => {
    const updated = [...sections];
    updated[sectionIdx].fields.splice(fieldIdx, 1);
    setSections(updated);
  };

  const handleCheckbox = (sectionIdx, fieldIdx, value) => {
    const updated = [...sections];
    updated[sectionIdx].fields[fieldIdx].checked = value;
    setSections(updated);
  };

  const handleEditSectionTitle = (sectionIdx, value) => {
    const updated = [...sections];
    updated[sectionIdx].title = value;
    setSections(updated);
  };

  const handleExportPDF = async () => {
    if (typeof window === "undefined") return;
    setIsExporting(true);
    await new Promise(r => setTimeout(r, 100)); // allow UI to update
    const html2pdf = (await import("html2pdf.js")).default;
    const element = formRef.current;
    if (!element) return;
    const exportBtn = document.getElementById("pdf-export-btn");
    if (exportBtn) exportBtn.style.display = "none";
    await html2pdf().from(element).save();
    if (exportBtn) exportBtn.style.display = "";
    setIsExporting(false);
  };

  return (
    <main className="bg-gray-100 min-h-screen p-4 flex flex-col items-center">
      <style>{`
        @media print {
          .no-print { display: none !important; }
        }
      `}</style>
      <div className="bg-white max-w-4xl w-full p-8 shadow-lg rounded relative">
        {/* PDF Export Button */}
        <button
          id="pdf-export-btn"
          title="Export as PDF"
          className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full shadow hover:bg-red-700 z-10 no-print"
          onClick={handleExportPDF}
        >
          <PdfIcon />
        </button>
        <div ref={formRef} style={{ backgroundColor: '#fff', color: '#000' }}>
          <FormHeader
            termEnding={headerFields.termEnding}
            className={headerFields.className}
            name={headerFields.name}
            rollNo={headerFields.rollNo}
            isEditing={headerEdit}
            onEdit={() => setHeaderEdit(true)}
            onSave={() => setHeaderEdit(false)}
            onChange={(field, value) => setHeaderFields(prev => ({ ...prev, [field]: value }))}
            isExporting={isExporting}
          />
          {sections.map((section, sIdx) => (
            <FormSection
              key={sIdx}
              title={section.title}
              fields={section.fields}
              onEditField={(fIdx, value) => handleEditField(sIdx, fIdx, value)}
              onDeleteField={(fIdx) => handleDeleteField(sIdx, fIdx)}
              onCheckbox={(fIdx, value) => handleCheckbox(sIdx, fIdx, value)}
              onAddField={() => handleAddField(sIdx, "")}
              isCustom={section.isCustom}
              onEditSectionTitle={value => handleEditSectionTitle(sIdx, value)}
              onDeleteSection={() => handleDeleteSection(sIdx)}
              isExporting={isExporting}
            />
          ))}
          <div className="flex justify-center my-8 no-print">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
              onClick={handleAddSection}
            >
              Add Section
            </button>
          </div>
          {/* Footer fields */}
          <section className="mb-8">
            <div className="flex justify-between items-center mb-2 no-print">
              <span className="text-lg font-bold">Footer Section</span>
              {footerEdit ? <SaveIcon onClick={() => setFooterEdit(false)} /> : <EditIcon onClick={() => setFooterEdit(true)} />}
            </div>
            <div className="mb-6">
              <label className="font-bold block mb-1">Conduct:</label>
              {footerEdit && !isExporting ? (
                <textarea
                  className="w-full h-20 border-4 border-black bg-gray-600 text-white p-2 text-lg"
                  value={conduct}
                  onChange={e => setConduct(e.target.value)}
                />
              ) : (
                <div className="w-full h-20 border-4 border-black bg-gray-600 text-white p-2 text-lg">{conduct}</div>
              )}
            </div>
            <div className="mb-6">
              <label className="font-bold block mb-1">Remarks:</label>
              {footerEdit && !isExporting ? (
                <textarea
                  className="w-full h-20 border-4 border-black bg-gray-600 text-white p-2 text-lg"
                  value={remarks}
                  onChange={e => setRemarks(e.target.value)}
                />
              ) : (
                <div className="w-full h-20 border-4 border-black bg-gray-600 text-white p-2 text-lg">{remarks}</div>
              )}
            </div>
            <div className="flex items-center mb-6 space-x-4">
              <label className="font-bold">Attendance:</label>
              {footerEdit && !isExporting ? (
                <input
                  className="border-4 border-black bg-gray-600 text-white w-20 text-center text-lg mr-2"
                  value={attendance}
                  onChange={e => setAttendance(e.target.value)}
                />
              ) : (
                <span className="border-4 border-black bg-gray-600 text-white w-20 text-center text-lg mr-2 inline-block px-2">{attendance}</span>
              )}
              <span className="font-bold">Out of:</span>
              {footerEdit && !isExporting ? (
                <input
                  className="border-4 border-black bg-gray-600 text-white w-20 text-center text-lg"
                  value={attendanceOutOf}
                  onChange={e => setAttendanceOutOf(e.target.value)}
                />
              ) : (
                <span className="border-4 border-black bg-gray-600 text-white w-20 text-center text-lg inline-block px-2">{attendanceOutOf}</span>
              )}
            </div>
            <div className="mb-6 flex items-center">
              <label className="font-bold mr-2">Class teacher(s):</label>
              {footerEdit && !isExporting ? (
                <input
                  className="border-4 border-black bg-gray-600 text-white w-full text-lg p-1"
                  value={classTeacher}
                  onChange={e => setClassTeacher(e.target.value)}
                />
              ) : (
                <span className="border-4 border-black bg-gray-600 text-white w-full text-lg p-1 inline-block">{classTeacher}</span>
              )}
            </div>
            <div className="flex items-center">
              <label className="font-bold mr-2">Next Term Begins:</label>
              {footerEdit && !isExporting ? (
                <input
                  className="border-4 border-black bg-gray-600 text-white w-full text-lg p-1"
                  value={nextTerm}
                  onChange={e => setNextTerm(e.target.value)}
                />
              ) : (
                <span className="border-4 border-black bg-gray-600 text-white w-full text-lg p-1 inline-block">{nextTerm}</span>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
