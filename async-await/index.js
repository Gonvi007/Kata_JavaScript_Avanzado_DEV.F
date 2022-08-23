const url_base = 'https://jsonplaceholder.typicode.com/users'

const getData = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

getData(url_base)
