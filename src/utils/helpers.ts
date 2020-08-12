function id_randomizer(): number  {

  let random_id_number = Math.floor(Math.random() * 800) + 1;

  return random_id_number;
}

export { id_randomizer as id_randomizer };
