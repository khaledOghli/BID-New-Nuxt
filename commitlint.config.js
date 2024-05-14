const HEADER_MAX_LENGTH = 72
const BODY_MAX_LINE_LENGTH = 100
const FOOTER_MAX_LINE_LENGTH = 100
const RULE_LEVEL_ERROR = 2
const RULE_LEVEL_WARNING = 1

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      RULE_LEVEL_ERROR,
      'always',
      [
        'build',
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'revert',
      ],
    ],
    'subject-case': [
      RULE_LEVEL_ERROR,
      'always',
      ['lower-case', 'sentence-case'],
    ],
    'subject-empty': [RULE_LEVEL_ERROR, 'never'],
    'header-max-length': [RULE_LEVEL_WARNING, 'always', HEADER_MAX_LENGTH],
    'body-max-line-length': [
      RULE_LEVEL_WARNING,
      'always',
      BODY_MAX_LINE_LENGTH,
    ],
    'footer-max-line-length': [
      RULE_LEVEL_WARNING,
      'always',
      FOOTER_MAX_LINE_LENGTH,
    ],
  },
}
