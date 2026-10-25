import type { Register } from 'claude-code'

const NEON = '#ff6a00'
const GLOW = '#ffa94d'

export const register: Register = on => {
  on('ui.render', { component: 'UserMessage' }, ($, e, next) => {
    if (e.props.from || e.props.task) {
      return next(e)
    }

    const { Box, Text } = $.ui.resolve(e)

    return (
      <Box borderStyle="round" borderColor={NEON} paddingX={1}>
        <Text color={GLOW}>{e.props.text}</Text>
      </Box>
    )
  })
}
