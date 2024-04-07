export function TransformTextToLinik(plainText: string) {
  const plainTextFormated = plainText
    .normalize('NFD')
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')

  return plainTextFormated
}
