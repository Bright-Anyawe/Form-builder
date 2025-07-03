import FormHeader from "./components/FormHeader";
import FormSection from "./components/FormSection";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen p-4 flex flex-col items-center">
      <div className="bg-white max-w-4xl w-full p-8 shadow-lg rounded">
        <FormHeader />
        <FormSection
          title="PHYSICAL DEVELOPMENT"
          fields={[
            "Can play actively",
            "Enjoy outdoor",
            "Manipulates playing with educational toys easily",
            "Can throw and kick"
          ]}
        />
        <FormSection
          title="HEALTH"
          fields={[
            "Can wash hands",
            "Can indicate toilet needs",
            "Eat sufficient food",
            "Eat independently",
            "Understand and stay away from common danger"
          ]}
        />
        <FormSection
          title="EMOTIONAL DEVELOPMENT"
          fields={[
            "Does child remain cheerful",
            "Mix with others",
            "Show cooperativeness",
            "Share things with others",
            "Like solitary play",
            "Act aggressively"
          ]}
        />
        <FormSection
          title="COGNITIVE, LANGUAGE AND NUMERACY DEVELOPMENT"
          fields={[
            "Concentration following actively through to conclusion",
            "Communicates with others in a clear and effective way",
            "Associates sound with objects, animals, people",
            "Discover common feature/differences of objects and shapes",
            "Understand basic concepts such as big, small, long, many",
            "Can use words, gestures to express needs",
            "Can tell differences in smell",
            "Recognise absence, presence of people",
            "Can tell differences in taste",
            "Can read, identify, form and write words and sentences",
            "Can count, say, identify and write numerals in words and figure 1-100",
            "Solve simple puzzle (sorting /matching)"
          ]}
        />
        <FormSection
          title="MUSIC, ART AND CREATIVITY"
          fields={[
            "Enjoys music, singing and dancing",
            "Enjoys painting, drawing and colouring",
            "Identify basic and secondary colours",
            "Enjoys reciting rhymes"
          ]}
        />
        {/* Conduct, Remarks, Attendance, Class teacher(s), Next Term Begins */}
        <section className="mb-8">
          <div className="mb-4">
            <label className="font-bold">Conduct:</label>
            <textarea className="w-full h-16 border bg-gray-200 mt-1" disabled />
          </div>
          <div className="mb-4">
            <label className="font-bold">Remarks:</label>
            <textarea className="w-full h-16 border bg-gray-200 mt-1" disabled />
          </div>
          <div className="flex items-center mb-4 space-x-4">
            <label className="font-bold">Attendance:</label>
            <input className="border-b border-black bg-gray-200 w-16" disabled value="0" />
            <span>Out of:</span>
            <input className="border-b border-black bg-gray-200 w-16" disabled value="0" />
          </div>
          <div className="mb-4">
            <label className="font-bold">Class teacher(s):</label>
            <input className="border-b border-black bg-gray-200 w-full ml-2" disabled value="" />
          </div>
          <div>
            <label className="font-bold">Next Term Begins:</label>
            <input className="border-b border-black bg-gray-200 w-full ml-2" disabled value="" />
          </div>
        </section>
      </div>
    </main>
  );
}
