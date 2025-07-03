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
        {/* Add more FormSection components for other sections as needed */}
      </div>
    </main>
  );
}
