var config = {
    style: 'mapbox://styles/yz734/cko38j2uo00nh18mlcn617wog',
    accessToken: 'pk.eyJ1IjoieXo3MzQiLCJhIjoiY2tucnFqbGRqMGdhOTJ3cGViaXFscmc5MCJ9.J7QoeJBEphJ13ziSOyuwng',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'Lebanese protests have given way to a debt crisis',
    subtitle: '',
    byline: 'By Yuhan Zhang & Maxwell Unterhalter',
    chapters: [
        {
            id: 'index1',
            alignment: 'left',
            title: 'Time to have some fun!',
            image: '',
            description: '',
            location: {
                center: [-77.01286578678878,38.89790382821677],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [{
                    layer: 'Red Lebanon Outline',
                    opacity: 0
                },
                {
                    layer: 'GDP',
                    opacity: 0
        
                },
                {
                    layer: 'Debt',
                    opacity: 0
        
                },
                {
                    layer: 'Banks collapsed1',
                    opacity: 0
                },{
                    layer: 'Banks collapsed2',
                    opacity: 0
                },
                {
                    layer: 'Route1',
                    opacity: 0},
                {
                    layer: 'Route2',
                    opacity: 0
                }
                ]
        },
        {
            id: 'index2',
            alignment: 'left',
            title: 'A virtual tour to Lebanon',
            image: '',
            description: '',
            location: {
                center: [35.583333, 33.714],
                zoom: 8.2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'prot1',
            alignment: 'right',
            title: 'Mass protests',
            image: '',
            description: 'The picture at the beginning of the article descipting an anti-American protest in Awkar, right outside the U.S. Embassy.',
            location: {
                center: [35.597727209881256,33.934996929076114],
                zoom: 16,
                pitch: 55.50,
                bearing: -7.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'U.S. Embassy',
                    opacity: 0.8
                }
            ],
            onChapterExit: []
        },
        {
            id: 'prot2',
            alignment: 'right',
            title: 'Mass protests',
            image: '',
            description: 'Nationwide mass protests lasted 7 weeks. Protesters’ demands involved with both social issues and political problems.',
            location: {
                center: [35.583333, 33.714],
                zoom: 8.2,
                pitch: 55.50,
                bearing: 0
            },
            onChapterEnter: [{
                    layer: 'Red Lebanon Outline',
                    opacity: 0.5
                }],
            onChapterExit: [{
                    layer: 'Red Lebanon Outline',
                    opacity: 0
                }]
        },
        {
            id: 'cris1',
            alignment: 'right',
            title: 'Soveriegn Debt & Fiscal crisis',
            image: '',
            description: 'Lebanon has $86 bn in debt and GDP of $56 bn. It has a budget deficit of 11% of GDP. ',
            location: {
                center: [35.583333, 33.714],
                zoom: 4.4,
                pitch: 60.50,
                bearing: 70.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'GDP',
                    opacity: 0.7
        
                },
                {
                    layer: 'Debt',
                    opacity: 0.7
        
                }],
            onChapterExit: [{
                    layer: 'GDP',
                    opacity: 0
        
                },
                {
                    layer: 'Debt',
                    opacity: 0
        
                }
                ]
        },
        {
            id: 'cris2',
            alignment: 'right',
            title: 'Soveriegn Debt & Fiscal crisis',
            image: '',
            description: 'The Banque du Liban has historically maintained stability, even in the face of large fiscal and public debt issues.',
            location: {
                center: [35.489353210058376, 33.89563966462831],
                zoom: 16.5,
                pitch: 55.50,
                bearing: -7.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Banque du Liban',
                    opacity: 0.8
                },
                {
                    layer: 'Banks',
                    opacity: 0.8
                }],
            onChapterExit: [
                {
                    layer: 'Banks',
                    opacity: 0
                }]
        },
        {
            id: 'cris3',
            alignment: 'right',
            title: 'Soveriegn Debt & Fiscal crisis',
            image: '',
            description: 'The domestic banking sector has funded a significant portion of the BdL’s borrowing: 71% of total assets of the Lebanese banking system are on loan to the public sector.',
            location: {
                center: [35.489353210058376, 33.89563966462831],
                zoom: 16.5,
                pitch: 60.50,
                bearing: 70.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'Banks collapsed1',
                    opacity: 0.8
                },
                {
                    layer: 'Banks collapsed2',
                    opacity: 0.8
                }],
            onChapterExit: [{
                    layer: 'Banks collapsed1',
                    opacity: 0
                },{
                    layer: 'Banks collapsed2',
                    opacity: 0
                }
                ]
        },
        {
            id: 'cris4',
            alignment: 'right',
            title: 'Political Chaos',
            image: '',
            description: 'Prime Minister Saad Hariri resigned on October 29, and he has been replaced with a caretaker government.',
            location: {
                center: [35.50441556, 33.89668226],
                zoom: 16,
                pitch: 55.50,
                bearing: -7.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'Parliament',
                    opacity: 0.8
                },
                {
                    layer: 'Route1',
                    opacity: 0.8
                }
                ],
            onChapterExit: []
        },
        {
            id: 'cris5',
            alignment: 'right',
            title: 'Political Chaos',
            image: '',
            description: 'In this country of religious diversity and sectarianism, political consenus can hardly be achieved in the Parliament.',
            location: {
                center: [35.50441556, 33.89668226],
                zoom: 16.5,
                pitch: 55.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [{
                    layer: 'Route2',
                    opacity: 0
                }]
              
        },
        {
            id: 'intl1',
            alignment: 'left',
            title: 'Bonus International Trips!',
            image: '',
            description: 'The political situation in Lebanon has been long influenced by colonial and external actors.',
            location: {
                center: [1.377, 24.496],
                zoom: 2.78,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'Route2',
                    opacity: 0.8
                }],
            onChapterExit: []
              
        },
        {
            id: 'intl2',
            alignment: 'right',
            title: 'A solution dans l’impasse?',
            image: '',
            description: 'Paris donors conference pledged $11 bn in soft loans targeted toward infrastructure and contingent on reforms. No money has been released as reforms have yet to be implemented.',
            location: {
                center: [3.572, 47.593],
                zoom: 5.59,
                pitch: 0.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
              
        }
    ]
};
