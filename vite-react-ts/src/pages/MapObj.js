import Map from 'ol/Map'
import OSM from 'ol/source/OSM'
import TileLayer from 'ol/layer/Tile'
import View from 'ol/View'
import { useEffect } from 'react'
import 'ol/ol.css'

const styleMap = {
    width: '400px',
    height: '400px',
}

const MapObj = () => {
    // Map init
    useEffect(() => {
        const map = new Map({
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            target: 'map',
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        })

        return () => {
            console.log('Composant Map détruit')
        }
    }, [])

    return <div id='map' style={styleMap}></div>
}

export default MapObj