import Agent from "@/components/Agent";
import DisplayTechIcon from "@/components/DisplayTechIcon";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getInterviewById } from "@/lib/actions/general.actions";
import { getRandomInterviewCover } from "@/lib/utils";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: RouteParams) => {
  const user = await getCurrentUser();
  const { id } = await params;
  const interview = await getInterviewById(id);

  if (!interview) redirect("/");

  return (
    <>
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={40}
              height={40}
              className="rounded-full object-cover size-[40[x]"
            />
            <h3 className="capitalize">{interview.role} interview</h3>
            <DisplayTechIcon techStack={interview.techStack} />
          </div>

          <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize">
            {interview.type}
          </p>
        </div>

        <Agent
          userName={user?.name}
          interviewId={id}
          type="interview"
          questions={interview.questions}
        />
      </div>
    </>
  );
};

export default page;
