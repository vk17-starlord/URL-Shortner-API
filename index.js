axios.post('https://rel.ink/api/links/',{
    
  "url": "https://news.ycombinator.com/"
}).then((response) => {
    console.log(response)
}).catch((error) =>console.log(error))