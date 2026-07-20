import type { Lesson } from '../../types/lesson'
import { basicsLesson } from './basics'
import { conversionLesson } from './conversion'
import { conditionsLesson } from './conditions'
import { loopsLesson } from './loops'
import { stringsLesson } from './strings'
import { arraysLesson } from './arrays'
import { methodsLesson } from './methods'
import { enumsStructsLesson } from './enumsStructs'
import { valueReferenceLesson } from './valueReference'
import { collectionsLesson } from './collections'
import { classesLesson } from './classes'
import { inheritanceLesson } from './inheritance'
import { polymorphismLesson } from './polymorphism'
import { exceptionsLesson } from './exceptions'
import { linqLesson } from './linq'

// Lessons are registered here as they are authored, keyed by topic id.
const lessonList: Lesson[] = [
  basicsLesson,
  conversionLesson,
  conditionsLesson,
  loopsLesson,
  stringsLesson,
  arraysLesson,
  methodsLesson,
  enumsStructsLesson,
  valueReferenceLesson,
  collectionsLesson,
  classesLesson,
  inheritanceLesson,
  polymorphismLesson,
  exceptionsLesson,
  linqLesson,
]

export const lessons: Record<string, Lesson> = Object.fromEntries(
  lessonList.map((l) => [l.topicId, l])
)

export function getLessonByTopicId(topicId: string): Lesson | undefined {
  return lessons[topicId]
}
