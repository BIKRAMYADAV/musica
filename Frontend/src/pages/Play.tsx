import MusicCard from '../components/MusicCard'
import tracks from '../utils/track.json'
import { musicCardProps } from '../props/musicCardProps'
function Play() {
  return (
    <div>
       <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Music Library</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {tracks.map(track:musicCardProps => (
          <MusicCard key={track.id} track={track} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Play