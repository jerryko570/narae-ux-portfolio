export function downloadCSV(path: string, filename: string) {
  const link = document.createElement('a')
  link.href = path
  link.download = filename
  link.click()
}
