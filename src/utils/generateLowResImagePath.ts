export default function generateLowResImagePath(thangImg: string) {
  return thangImg.replace("\.webp", "_low.jpg")
}
