import type { Exercise } from '../../types/exercise'
import { basicsExercises } from './basics'
import { conversionExercises } from './conversion'
import { conditionsExercises } from './conditions'
import { loopsExercises } from './loops'
import { stringsExercises } from './strings'
import { arraysExercises } from './arrays'
import { methodsExercises } from './methods'
import { enumsStructsExercises } from './enumsStructs'
import { valueReferenceExercises } from './valueReference'
import { collectionsExercises } from './collections'
import { classesExercises } from './classes'
import { inheritanceExercises } from './inheritance'
import { polymorphismExercises } from './polymorphism'
import { exceptionsExercises } from './exceptions'
import { linqExercises } from './linq'

// Curriculum order. IDs are assigned at runtime from position, so per-file
// id fields are placeholders — always reference items through this array.
export const exercises: Exercise[] = [
  ...basicsExercises,
  ...conversionExercises,
  ...conditionsExercises,
  ...loopsExercises,
  ...stringsExercises,
  ...arraysExercises,
  ...methodsExercises,
  ...enumsStructsExercises,
  ...valueReferenceExercises,
  ...collectionsExercises,
  ...classesExercises,
  ...inheritanceExercises,
  ...polymorphismExercises,
  ...exceptionsExercises,
  ...linqExercises,
].map((item, i) => ({ ...item, id: i + 1 }))
