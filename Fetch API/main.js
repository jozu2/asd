//fetch api

// 3 steps 

//1.fetch the data
//2.response
//3.return the response to get data.

// fetch('shows/tvseries.json').then((res) => {
//     console.log('resolved', res)
//     return res.json();

// }).then(data => {
//       console.log(data)

// })
// .catch((err) => {
// console.log('rejected', err)
// });


//async & await

const getData = async () => {

    const res = await fetch('shows/animes.json')
      if(res.status !== 200){
        throw new Error('cannot fetch the data')
      }

    const data = await res.json();

    return data;


};


getData()
    .then(data => console.log('resolved', data))
    .catch(err => console.log('rejected', err.message));

