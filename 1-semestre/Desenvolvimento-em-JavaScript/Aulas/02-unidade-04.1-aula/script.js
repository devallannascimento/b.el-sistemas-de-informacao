var map = new ol.Map({
    target: 'mapa',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-45, -20]),
      zoom: 4
    })
  });

  