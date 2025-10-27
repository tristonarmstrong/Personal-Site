import photo from '../assets/avatar.jpg'

export function Avatar() {
  return (
    <div style={`view-transition-name: avatar; background-image: url(${photo})`} className="w-10 h-10 rounded-full bg-center bg-cover"></div>
  )
}
