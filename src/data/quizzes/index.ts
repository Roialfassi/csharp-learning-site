import type { Quiz } from '../../types/quiz'
import { basicsQuizzes } from './basics'
import { conversionQuizzes } from './conversion'
import { conditionsQuizzes } from './conditions'
import { loopsQuizzes } from './loops'
import { stringsQuizzes } from './strings'
import { arraysQuizzes } from './arrays'
import { methodsQuizzes } from './methods'
import { enumsStructsQuizzes } from './enumsStructs'
import { valueReferenceQuizzes } from './valueReference'
import { collectionsQuizzes } from './collections'
import { classesQuizzes } from './classes'
import { inheritanceQuizzes } from './inheritance'
import { polymorphismQuizzes } from './polymorphism'
import { exceptionsQuizzes } from './exceptions'
import { linqQuizzes } from './linq'

// Curriculum order. IDs are assigned at runtime from position, so per-file
// id fields are placeholders — always reference items through this array.
export const quizzes: Quiz[] = [
  ...basicsQuizzes,
  ...conversionQuizzes,
  ...conditionsQuizzes,
  ...loopsQuizzes,
  ...stringsQuizzes,
  ...arraysQuizzes,
  ...methodsQuizzes,
  ...enumsStructsQuizzes,
  ...valueReferenceQuizzes,
  ...collectionsQuizzes,
  ...classesQuizzes,
  ...inheritanceQuizzes,
  ...polymorphismQuizzes,
  ...exceptionsQuizzes,
  ...linqQuizzes,
].map((item, i) => ({ ...item, id: i + 1 }))
