const cities = [
    {
        id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
        zip: '6400',
        name: 'Sønderborg',
    },
    {
        id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
        zip: '8700',
        name: 'Horsens',
    },
];

const chains = [
    {
        id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
        name: 'Netto',
    },
    {
        id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
        name: 'Fakta',
    },
    {
        id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
        name: 'Nørrebros Kiosk',
    },
];

const stores = [
    {
        id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
        chain_id: chains[0].id,
        city_id: cities[1].id,
        address: 'Vestergade 25',
    },
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        chain_id: chains[2].id,
        city_id: cities[1].id,
        address: 'Nørretorv 2',
    },
];