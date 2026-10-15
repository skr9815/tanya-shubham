import { wedding } from '../config.js'
import useFileAvailable from '../hooks/useFileAvailable.js'
import Venue from '../components/Venue.jsx'
import InvitationCards from '../components/InvitationCards.jsx'

export default function VenueContainer() {
  const url = wedding.invitationCard
  const ready = useFileAvailable(url)
  const fileName = `Tanya-Shubham-Invitation${url ? url.slice(url.lastIndexOf('.')) : ''}`

  return (
    <Venue venues={wedding.venues}>
      <InvitationCards
        printed={{ url, ready, fileName }}
        digitalUrl={wedding.digitalInvitation}
        galleryUrl={wedding.photoGallery}
      />
    </Venue>
  )
}
