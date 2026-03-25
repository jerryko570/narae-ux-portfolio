export function parseValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/)
  return {
    num: match ? parseInt(match[1]) : 0,
    suffix: match ? match[2] : value,
  }
}
