const commitlintConfig = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(⚙️Chore|✨Feature|♻️Refactor|🐛Fix|📝Docs): (.+)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      ['⚙️Chore', '✨Feature', '♻️Refactor', '🐛Fix', '📝Docs'],
    ],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
  },
}

export default commitlintConfig
