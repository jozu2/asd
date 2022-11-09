
//XMLRequest http setup

// const getData = (response, callback) => {

// const request = new XMLHttpRequest();
// request.addEventListener('readystatechange', () => {
//   if(request.readyState === 4 && request.status == 200){
//     const jsonData = JSON.parse(request.responseText);
//    callback(undefined, jsonData);
//   }else if(request.readyState === 4){
//     callback('could not fetch data', undefined);
//   }
// })

// request.open('GET', response);
// request.send();
// }
//callbackHELL
// getData('shows/animes.json', (err, data) => {
  // if(err){
  //   console.log(err)
  // } else {
    // console.log(data)
  // } 
//           getData('shows/tvseries.json', (err, data) => {
//               console.log(data)
//           });
// });


//promise example

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     // resolve('the data');
//     reject('error data');
//   });
// }
// getPromise().then(data => console.log(data))
//             .catch(err => console.log(err))


const getData = (response) => {


  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();


    request.addEventListener('readystatechange', () => {
      if(request.readyState === 4 && request.status == 200){
        const jsonData = JSON.parse(request.responseText);
       resolve(jsonData);


      }else if(request.readyState === 4){
       reject('could not fetch data');
      }
    })
    
    request.open('GET', response);
    request.send();
  });

  }


  getData('shows/animes.json')
    .then(data => {
    console.log('promise 1 resolved', data);

    return getData('shows/tvseries.json')
    .then(data => {
      console.log('promise 2 resolved', data);

      return getData('shows/test.json')
      .then(data => {
        console.log('promise 3 resolved', data)

      })
      
    })

  })
  .catch(err =>{
  console.log('promise rejected', err)
  })
                          