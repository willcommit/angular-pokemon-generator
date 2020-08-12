function id_randomizer(): number  {

  let random_id_number = Math.floor(Math.random() * 800) + 1;

  return random_id_number;
}

function capitalize(inputString: string): string {

  //regex take the first letter found and uppercase it
  return inputString.replace(/^\w/, (c) => c.toUpperCase());
}

export { id_randomizer as id_randomizer };
export { capitalize as capitalize };
