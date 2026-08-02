import { useState } from 'react'
import { CareerRetrospective } from './components/CareerRetrospective'
import { CaseStudy } from './components/CaseStudy'
import { CommunityChronicle } from './components/CommunityChronicle'
import { FeaturedProjects } from './components/FeaturedProjects'
import { GazetteFooter } from './components/GazetteFooter'
import { HonorsAndAwards } from './components/HonorsAndAwards'
import { Masthead } from './components/Masthead'
import { PaperGrain } from './components/PaperGrain'
import { ScannerSweep } from './components/ScannerSweep'
import { Sidebar } from './components/Sidebar'
import { SpecialReport } from './components/SpecialReport'
import { VideoShowcase } from './components/VideoShowcase'
import { WorksInPreparation } from './components/WorksInPreparation'
import { portfolio } from './data/portfolio'

function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)

  const activeProject = portfolio.projects.find(
    (p) => p.id === activeProjectId,
  )

  if (activeProject) {
    return (
      <CaseStudy
        project={activeProject}
        onBack={() => setActiveProjectId(null)}
      />
    )
  }

  return (
    <div className="group relative min-h-svh bg-paper">
      <PaperGrain />
      <ScannerSweep />
      <div className="group relative z-10 mx-auto max-w-6xl px-4 pb-12 pt-0 md:px-6">
        <Masthead />
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12">
          <div className="min-w-0">
            <SpecialReport />
            <CareerRetrospective />
            <WorksInPreparation />
            <FeaturedProjects onOpenCaseStudy={setActiveProjectId} />
            <VideoShowcase />
            <HonorsAndAwards />
            <CommunityChronicle />
          </div>
          <Sidebar />
        </div>
        <GazetteFooter />
      </div>
    </div>
  )
}

export default App
