export interface ProjectStep {
  title: string
  goal: string
  instructions: string[]
  code?: string
  checkpoint: string
  checkpointOutput?: string
}

export interface Project {
  topicId: string
  title: string
  subtitle: string
  icon: string
  description: string[]
  finalPreview?: string
  steps: ProjectStep[]
  fullSolution: string
}
