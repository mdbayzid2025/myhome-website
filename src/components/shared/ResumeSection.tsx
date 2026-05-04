import React from 'react';

const educationData = [
  {
    id: 1,
    title: 'BSc in Computer Science',
    subtitle: 'University of DVI (2006 - 2010)',
    badge: '3.90/4',
    description: 'The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.',
  },
  {
    id: 2,
    title: 'AS - Science & Information',
    subtitle: 'SuperKing College (2001 - 2005)',
    badge: '4.75/5',
    description: 'Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.',
  },
];

const experienceData = [
  {
    id: 1,
    title: 'Sr. Software Engineer',
    subtitle: 'Google Out Tech - (2017 - Present)',
    badge: 'USA',
    description: "Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up.",
  },
  {
    id: 2,
    title: 'Web Developer & Trainer',
    subtitle: 'Apple Developer Team - (2012 - 2016)',
    badge: 'MALAYSIA',
    description: "A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy.",
  },
];

const ResumeCard = ({ item }: { item: any }) => {
  return (
    <div className="relative pl-8 sm:pl-12 py-6 group">
      {/* Timeline vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 group-hover:bg-rose-500 transition-colors duration-300"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-[-6px] top-12 w-4 h-4 rounded-full border-4 border-gray-200 bg-white group-hover:border-rose-500 transition-colors duration-300"></div>

      {/* Card Content */}
      <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.1)] transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">{item.title}</h3>
            <p className="text-slate-500 text-sm">{item.subtitle}</p>
          </div>
          <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-semibold text-rose-500 bg-white shadow-sm rounded-md border border-rose-100">
            {item.badge}
          </span>
        </div>
        
        <hr className="border-gray-100 mb-6" />
        
        <p className="text-slate-600 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const ResumeSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Education Section */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-8 pl-4">Education Quality</h2>
            <div className="space-y-0">
              {educationData.map((item) => (
                <ResumeCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-8 pl-4">Job Experience</h2>
            <div className="space-y-0">
              {experienceData.map((item) => (
                <ResumeCard key={item.id} item={item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
