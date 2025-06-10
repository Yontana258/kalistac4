var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_persil_baru_1 = new ol.format.GeoJSON();
var features_persil_baru_1 = format_persil_baru_1.readFeatures(json_persil_baru_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_persil_baru_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_persil_baru_1.addFeatures(features_persil_baru_1);
var lyr_persil_baru_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_persil_baru_1, 
                style: style_persil_baru_1,
                popuplayertitle: 'persil_baru',
                interactive: true,
    title: 'persil_baru<br />\
    <img src="styles/legend/persil_baru_1_0.png" /> Kosong<br />\
    <img src="styles/legend/persil_baru_1_1.png" /> Hak Guna Bangunan<br />\
    <img src="styles/legend/persil_baru_1_2.png" /> Hak Milik<br />\
    <img src="styles/legend/persil_baru_1_3.png" /> Hak Pakai<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_persil_baru_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_persil_baru_1];
lyr_persil_baru_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'KELURAHAN': 'KELURAHAN', 'KECAMATAN': 'KECAMATAN', 'NIB': 'NIB', 'TIPE_HAK': 'TIPE_HAK', 'DUSUN': 'DUSUN', 'STATUS': 'STATUS', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_persil_baru_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'KELURAHAN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'NIB': 'TextEdit', 'TIPE_HAK': 'TextEdit', 'DUSUN': 'TextEdit', 'STATUS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_persil_baru_1.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'OBJECTID': 'hidden field', 'KELURAHAN': 'hidden field', 'KECAMATAN': 'hidden field', 'NIB': 'inline label - always visible', 'TIPE_HAK': 'inline label - always visible', 'DUSUN': 'hidden field', 'STATUS': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_persil_baru_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});