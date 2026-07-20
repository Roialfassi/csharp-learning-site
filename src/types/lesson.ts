export type CalloutVariant = 'tip' | 'warning' | 'success' | 'info'

export type LessonBlock =
  | { kind: 'p'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'code'; code: string; caption?: string }
  | { kind: 'callout'; variant: CalloutVariant; text: string }
  | { kind: 'table'; headers: string[]; rows: string[][] }
  | { kind: 'list'; items: string[]; ordered?: boolean }

export interface LessonSection {
  id: string
  icon: string
  title: string
  blocks: LessonBlock[]
}

export interface Lesson {
  topicId: string
  title: string
  subtitle: string
  sections: LessonSection[]
}
