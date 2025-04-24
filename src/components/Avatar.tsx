import photo from '../assets/avatar.jpg'

export function Avatar() {
  return (
    <div className="w-10 h-10 rounded-full bg-center bg-cover" style={`background-image: url(${photo})`}></div>
  )
}
