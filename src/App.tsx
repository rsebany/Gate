import { useState } from 'react'
import { CareerRetrospective } from './components/CareerRetrospective'
import { CaseStudy } from './components/CaseStudy'
import { CommunityChronicle } from './components/CommunityChronicle'
import { FeaturedProjects } from './components/FeaturedProjects'
import { GazetteFooter } from './components/GazetteFooter'
import { HonorsAndAwards } from './components/HonorsAndAwards'
import { Masthead } from './components/Masthead'
import { Sidebar } from './components/Sidebar'
import { SpecialReport } from './components/SpecialReport'
import { VideoShowcase } from './components/VideoShowcase'
import { usePortfolio } from './hooks/usePortfolio'

function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)
  const { projects } = usePortfolio()

  const activeProject = projects.find((p) => p.id === activeProjectId)

  if (activeProject) {
    return (
      <CaseStudy
        project={activeProject}
        onBack={() => setActiveProjectId(null)}
      />
    )
  }

  return (
    <div className="min-h-svh bg-paper">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-0 md:px-6">
        <Masthead />
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12">
          <div className="min-w-0">
            <SpecialReport />
            <CareerRetrospective />
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
