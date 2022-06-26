import { useGetLessonsQuery } from "../graphql/generated";
import Lesson from "./Lesson";

const Sidebar = () => {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              availableAt={new Date(lesson.availableAt)}
              title={lesson.title}
              type={lesson.lessonType}
              slug={lesson.slug}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
