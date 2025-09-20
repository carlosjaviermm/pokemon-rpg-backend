exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('my_pokemon').del()
  await knex('my_pokemon').insert([
        {
      user_id: "06f73682-57a8-409f-aa9f-32bd10ffe3dc",
      pokemon_id: "355486b3-8044-4e5b-a2c3-3d69d9339eef",
      b_active: true,
    },  
    {
      user_id: "4e5ecc0e-465e-478b-a367-dde8bcb7e33f",
      pokemon_id: "73b81b62-ec67-4ec5-b66e-5082ceac53e8",
      b_active: true,
    },    
    {
      user_id: "4e5ecc0e-465e-478b-a367-dde8bcb7e33f",
      pokemon_id: "93bb4f3c-ff16-4998-b888-b3c842b4c769",
      b_active: false,
    },    
    {
      user_id: "06f73682-57a8-409f-aa9f-32bd10ffe3dc",
      pokemon_id: "9e2c185e-053c-4c32-b778-80a2e10e984f",
      b_active: true,
    },    
    {
      user_id: "5cb45c53-418f-499e-b3a3-682777fe1567",
      pokemon_id: "e577f4c0-a79b-46ae-ad30-00b3398b0925",
      b_active: false,
    },    
    {
      user_id: "5cb45c53-418f-499e-b3a3-682777fe1567",
      pokemon_id: "fd006591-e78b-4f80-85cd-0f02095f5bc6",
      b_active: true,
    },
  ]);
};
