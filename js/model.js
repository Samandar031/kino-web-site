export const renderHtml = async function (val) {
  const res = await fetch(
    `https://omdbapi.com/?s=${val}&page=1&apikey=fc1fef96`
  );
  const data = await res.json();

  let obj = data.Search;

  return obj;
};
