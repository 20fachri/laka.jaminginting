var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 0.750000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Buffer25Meter_1 = new ol.format.GeoJSON();
var features_Buffer25Meter_1 = format_Buffer25Meter_1.readFeatures(json_Buffer25Meter_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer25Meter_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer25Meter_1.addFeatures(features_Buffer25Meter_1);
var lyr_Buffer25Meter_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer25Meter_1, 
                style: style_Buffer25Meter_1,
                popuplayertitle: 'Buffer 25 Meter',
                interactive: true,
                title: '<img src="styles/legend/Buffer25Meter_1.png" /> Buffer 25 Meter'
            });
var format_JlJaminGinting_2 = new ol.format.GeoJSON();
var features_JlJaminGinting_2 = format_JlJaminGinting_2.readFeatures(json_JlJaminGinting_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JlJaminGinting_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlJaminGinting_2.addFeatures(features_JlJaminGinting_2);
var lyr_JlJaminGinting_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlJaminGinting_2, 
                style: style_JlJaminGinting_2,
                popuplayertitle: 'Jl. Jamin Ginting',
                interactive: true,
                title: '<img src="styles/legend/JlJaminGinting_2.png" /> Jl. Jamin Ginting'
            });
var format_Jalan_Section_3 = new ol.format.GeoJSON();
var features_Jalan_Section_3 = format_Jalan_Section_3.readFeatures(json_Jalan_Section_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Section_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Section_3.addFeatures(features_Jalan_Section_3);
var lyr_Jalan_Section_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Section_3, 
                style: style_Jalan_Section_3,
                popuplayertitle: 'Jalan_Section',
                interactive: true,
    title: 'Jalan_Section<br />\
    <img src="styles/legend/Jalan_Section_3_0.png" /> 1<br />\
    <img src="styles/legend/Jalan_Section_3_1.png" /> 2<br />' });
var format_TitikKecelakaan_4 = new ol.format.GeoJSON();
var features_TitikKecelakaan_4 = format_TitikKecelakaan_4.readFeatures(json_TitikKecelakaan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikKecelakaan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikKecelakaan_4.addFeatures(features_TitikKecelakaan_4);
var lyr_TitikKecelakaan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikKecelakaan_4, 
                style: style_TitikKecelakaan_4,
                popuplayertitle: 'Titik Kecelakaan',
                interactive: true,
    title: 'Titik Kecelakaan<br />\
    <img src="styles/legend/TitikKecelakaan_4_0.png" /> 2021<br />\
    <img src="styles/legend/TitikKecelakaan_4_1.png" /> 2022<br />\
    <img src="styles/legend/TitikKecelakaan_4_2.png" /> 2023<br />\
    <img src="styles/legend/TitikKecelakaan_4_3.png" /> 2024<br />' });
var group_Database = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Database'});

lyr_GoogleSatelite_0.setVisible(true);lyr_Buffer25Meter_1.setVisible(true);lyr_JlJaminGinting_2.setVisible(true);lyr_Jalan_Section_3.setVisible(true);lyr_TitikKecelakaan_4.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_Buffer25Meter_1,lyr_JlJaminGinting_2,lyr_Jalan_Section_3,lyr_TitikKecelakaan_4];
lyr_Buffer25Meter_1.set('fieldAliases', {'Panjang': 'Panjang', 'Nama': 'Nama', 'Klaster': 'Klaster', });
lyr_JlJaminGinting_2.set('fieldAliases', {'Panjang': 'Panjang', 'Nama': 'Nama', 'Klaster': 'Klaster', });
lyr_Jalan_Section_3.set('fieldAliases', {'Panjang': 'Panjang', 'Nama': 'Nama', 'Klaster': 'Klaster', 'Urutan': 'Urutan', });
lyr_TitikKecelakaan_4.set('fieldAliases', {'No': 'No', 'Alamat Kej': 'Alamat Kej', 'm': 'm', 'lb': 'lb', 'lr': 'lr', 'Tahun': 'Tahun', 'Klaster': 'Klaster', });
lyr_Buffer25Meter_1.set('fieldImages', {'Panjang': 'Range', 'Nama': 'TextEdit', 'Klaster': 'TextEdit', });
lyr_JlJaminGinting_2.set('fieldImages', {'Panjang': 'Range', 'Nama': 'TextEdit', 'Klaster': 'TextEdit', });
lyr_Jalan_Section_3.set('fieldImages', {'Panjang': 'Range', 'Nama': 'TextEdit', 'Klaster': 'TextEdit', 'Urutan': 'Range', });
lyr_TitikKecelakaan_4.set('fieldImages', {'No': 'TextEdit', 'Alamat Kej': 'TextEdit', 'm': 'TextEdit', 'lb': 'TextEdit', 'lr': 'TextEdit', 'Tahun': 'TextEdit', 'Klaster': 'TextEdit', });
lyr_Buffer25Meter_1.set('fieldLabels', {'Panjang': 'hidden field', 'Nama': 'no label', 'Klaster': 'hidden field', });
lyr_JlJaminGinting_2.set('fieldLabels', {'Panjang': 'hidden field', 'Nama': 'no label', 'Klaster': 'hidden field', });
lyr_Jalan_Section_3.set('fieldLabels', {'Panjang': 'hidden field', 'Nama': 'hidden field', 'Klaster': 'inline label - always visible', 'Urutan': 'inline label - always visible', });
lyr_TitikKecelakaan_4.set('fieldLabels', {'No': 'hidden field', 'Alamat Kej': 'header label - visible with data', 'm': 'inline label - visible with data', 'lb': 'inline label - always visible', 'lr': 'inline label - visible with data', 'Tahun': 'header label - always visible', 'Klaster': 'header label - always visible', });
lyr_TitikKecelakaan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});