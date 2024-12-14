import { getCourses, getUserProgress } from "@/db/queries"
import List from "./list";

const CoursesPage = async () => {

    const coursesData = await getCourses();
    const userProgressData = await getUserProgress();

    const [courses, userProgress] = await Promise.all([coursesData, userProgressData])

    // console.log("userProgress will be", userProgress)

    return (
        <div className="h-full max-w-[912px] px-3 mx-auto">
            <h1 className="text-2xl font-bold text-netural-700">
                Language Courses
            </h1>
            <List
                courses={courses}
                activeCourseId={userProgress?.activeCourseId ?? null}
            />
        </div>
    )
}

export default CoursesPage
