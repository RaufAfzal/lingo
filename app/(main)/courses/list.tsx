"use client"

import { courses } from "@/db/schema"
import Card from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type Props = {
    courses: typeof courses.$inferInsert[];
    activeCourseId: number | undefined | null
}

const List = ({ courses, activeCourseId }: Props) => {
    const router = useRouter();
    const [pending, startTransition] = useTransition();


    const onClick = (id: number) => {
        console.log("What is coming in id here ", id)
        if (pending) {
            return;
        }

        if (id === activeCourseId) {
            console.log("What is coming in id here")
            return router.push("/learn")
        }

        startTransition(() => {
            upsertUserProgress(id).then(() => { console.log("hurrah we updated your progress") })
                .catch(() => toast.error("hurrah we were unable to update your progress"))
        })
    }


    return (
        <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {courses.map((course) => (
                <Card
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    imageSrc={course.imageSrc}
                    onClick={onClick}
                    disabled={pending}
                    active={course.id === activeCourseId}
                />
            ))}
        </div>
    )
}

export default List
