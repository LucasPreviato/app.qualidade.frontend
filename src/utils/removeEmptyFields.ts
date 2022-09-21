// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function removeEmptyFields(data: Record<string, unknown>) {
  Object.keys(data).forEach((key) => {
    if (data[key] === '' || data[key] == null) {
      delete data[key]
    }
  })
}
