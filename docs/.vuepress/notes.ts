import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'bar'],
})

const extendhashtable=defineNoteConfig({
  dir: 'Extendible_Hash_Table',
  link: '/Extendible_Hash_Table',
  sidebar: ['', '基于可拓展哈希表的索引结构的实现'],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote,extendhashtable],
})
