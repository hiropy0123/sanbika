// TODO
// DegreeName ベースで管理
// ルートキーまたは、選択されたキーを元に、DegMapのmapでReplaceする

const DegreeName = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ', 'Ⅵ', 'Ⅶ']

const DegMap = [
  {
    key: 'A',
    map: ['A', 'B', 'C♯', 'D', 'E', 'F♯', 'G♯']
  },
  {
    key: 'B',
    map: ['B', 'C♯', 'D♯', 'E', 'F♯', 'G♯', 'A♯']
  },
  {
    key: 'C',
    map: ['C', 'D', 'E', 'F', 'G', 'A', 'B']
  },
  {
    key: 'D',
    map: ['D', 'E', 'F♯', 'G', 'A', 'B', 'C♯']
  },
  {
    key: 'E',
    map: ['E', 'F♯', 'G♯', 'A', 'B', 'C♯', 'D♯']
  },
  {
    key: 'F',
    map: ['F', 'G', 'A', 'B♭', 'C', 'D', 'E']
  },
  {
    key: 'G',
    map: ['G', 'A', 'B', 'C', 'D', 'E', 'F♯']
  },
  {
    key: 'A♭',
    map: ['A♭', 'B♭', 'C', 'D♭', 'E♭', 'F', 'G']
  },
  {
    key: 'B♭',
    map: ['B♭', 'C', 'D', 'E♭', 'F', 'G', 'A']
  },
  {
    key: 'C#',
    map: ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#']
  },
  {
    key: 'D♭',
    map: ['D♭', 'E♭', 'F', 'G♭', 'A♭', 'B♭', 'C']
  },
  {
    key: 'E♭',
    map: ['E♭', 'F', 'G', 'A♭', 'B♭', 'C', 'D']
  },
  {
    key: 'F♯',
    map: ['F♯', 'G♯', 'A♯', 'B', 'C♯', 'D♯', 'E♯']
  },
  {
    key: 'G♭',
    map: ['G♭', 'A♭', 'B♭', 'C♭', 'D♭', 'E♭', 'F']
  }
]
