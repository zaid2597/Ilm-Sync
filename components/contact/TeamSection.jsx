"use client";

import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { teamMembers } from "@/data/teamMembers";

function LinkedinIcon(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function TeamSection() {
  return (
    <section className="bg-slate-50/50 py-20 border-t border-slate-100/80">
      <Container>
        <SectionHeading
          eyebrow="Meet Our Team"
          title="Innovators Behind Ilm Sync"
          description="Our dedicated experts leverage modern technologies to simplify school & madrasa management, ensuring every institute operates smoothly and efficiently."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group flex h-full flex-col items-center justify-between text-center rounded-3xl bg-white p-8 ring-1 ring-slate-200/70 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:ring-brand-200"
            >
              <div className="flex flex-col items-center w-full">
                {/* Profile Image with Navy Blue Backdrop Circle matching screenshot design */}
                <div className="relative mb-5 flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-[#1B365D] p-1.5 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {member.name}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-slate-600">
                  {member.role}
                </p>

                {/* Optional Short Bio */}
                {member.bio && (
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-xs">
                    {member.bio}
                  </p>
                )}
              </div>

              {/* Optional LinkedIn Action Button */}
              {member.linkedin && (
                <div className="mt-6 pt-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn Profile`}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0077B5] text-white shadow-sm transition-all duration-200 hover:bg-[#005E93] hover:scale-110"
                  >
                    <LinkedinIcon />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
