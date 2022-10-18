const getData = async() => {
  const res = await fetch('');
  const json = res.json();

  console.log(json)
}

getData();