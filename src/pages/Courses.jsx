import CourseCard from "../components/CourseCard";

function Courses() {
  return (
    <section className="grid">
      <CourseCard
        title="Frontend"
        desc="HTML, CSS, JavaScript, React"
      />
      <CourseCard
        title="Backend"
        desc="Node.js, базы данных"
      />
      <CourseCard
        title="Python"
        desc="Для начинающих и продвинутых"
      />
      <CourseCard
        title="UI / UX"
        desc="Дизайн и прототипирование"
      />
    </section>
  );
}

export default Courses;
