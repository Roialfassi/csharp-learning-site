import type { Project } from '../../types/project'
import { basicsProject } from './basics'
import { conversionProject } from './conversion'
import { conditionsProject } from './conditions'
import { loopsProject } from './loops'
import { stringsProject } from './strings'
import { arraysProject } from './arrays'
import { methodsProject } from './methods'
import { enumsStructsProject } from './enumsStructs'
import { valueReferenceProject } from './valueReference'
import { collectionsProject } from './collections'
import { classesProject } from './classes'
import { inheritanceProject } from './inheritance'
import { polymorphismProject } from './polymorphism'
import { exceptionsProject } from './exceptions'
import { linqProject } from './linq'

// Projects are registered here as they are authored, keyed by topic id.
const projectList: Project[] = [
  basicsProject,
  conversionProject,
  conditionsProject,
  loopsProject,
  stringsProject,
  arraysProject,
  methodsProject,
  enumsStructsProject,
  valueReferenceProject,
  collectionsProject,
  classesProject,
  inheritanceProject,
  polymorphismProject,
  exceptionsProject,
  linqProject,
]

export const projects: Record<string, Project> = Object.fromEntries(
  projectList.map((p) => [p.topicId, p])
)

export function getProjectByTopicId(topicId: string): Project | undefined {
  return projects[topicId]
}
