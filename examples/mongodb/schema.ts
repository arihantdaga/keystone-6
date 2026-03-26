import type { Lists } from '.keystone/types'
import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import {
  checkbox,
  integer,
  json,
  relationship,
  select,
  text,
  timestamp,
} from '@keystone-6/core/fields'

export const lists = {
  Task: list({
    access: allowAll,
    fields: {
      label: text({ validation: { isRequired: true } }),
      priority: select({
        type: 'enum',
        options: [
          { label: 'Low', value: 'low' },
          { label: 'Medium', value: 'medium' },
          { label: 'High', value: 'high' },
        ],
      }),

      isComplete: checkbox({ defaultValue: false }),
      additionalData: json(),

      assignedTo: relationship({
        ref: 'Person.tasks',
        many: false,
      }),

      finishBy: timestamp(),
      viewCount: integer({ defaultValue: 0 }),
    },
  }),
  Person: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      email: text({ isIndexed: 'unique' }),
      tasks: relationship({ ref: 'Task.assignedTo', many: true }),
    },
  }),
} satisfies Lists
