import StickyWrapper from "@/components/sticky-wrapper";
import FeedWraper from "@/components/feed-wraper";
import { Header } from "./header"
import UserProgress from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";


const LearnPage = async () => {

    const userProgressData = getUserProgress()

    const [userProgress] = await Promise.all([userProgressData])

    if (!userProgress || !userProgress.activeCourseId) {
        redirect("/courses")
    }

    return (
        //Todo: if any error occurs add the flex-row-reverse and change the components position below
        <div className="flex px-6 gap-[48px]">
            <FeedWraper>
                <Header title="Spanish" />
                My Feed
            </FeedWraper>
            <StickyWrapper>
                <UserProgress
                    activeCourse={{ title: "Spanish", imageSrc: "/es.svg" }}
                    hearts={5} points={100}
                    hasActiveSubscription={false} />
            </StickyWrapper>

        </div>
    )
}

export default LearnPage;