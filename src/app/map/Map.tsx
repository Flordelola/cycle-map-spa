import MapContainer from "./container/map-container/MapContainer"
import SidebarNetworks from "./container/sidebar-networks/SidebarNetworks"

function Map() {

  return (
    <div className="container flex justify-content-between">
      <SidebarNetworks/>

      <MapContainer />
    </div>
  )
}

export default Map
