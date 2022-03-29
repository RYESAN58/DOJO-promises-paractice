// const noMondays = new Promise( (resolve, reject) => {
//     if(new Date().getDay() !== 1) {
//         resolve("Good, it's not Monday!");
//         } else {
//             reject("Someone has a case of the Mondays!");
//         }
//     });
//     noMondays
//         .then( res => console.log(res) )
//         .catch( err => console.log(err) );


function tossCoin() {
				return Math.random() > 0.5 ? "heads" : "tails";
		}

// function fiveHeadsSync() {
// 				let headsCount = 0;
// 				let attempts = 0;
// 				while(headsCount < 5) {
// 						attempts++;
// 						let result = tossCoin();
// 						console.log(`${result} was flipped`);
// 						if(result === "heads") {
// 								headsCount++;
// 						} else {
// 								headsCount = 0;
// 						}
// 				}
// 				return `It took ${attempts} tries to flip five "heads"`;
// 		}
// 		console.log( fiveHeadsSync() );
// 		console.log( "This is run after the fiveHeadsSync function completes" );

function fiveHeads() {
				return new Promise( (resolve, reject) => {
						let headsCount = 0;
						let attempts = 0;
						let max = 100
						while (headsCount < 5 && attempts != max){
								attempts++
								let result = tossCoin();
								console.log(`${result} was flipped`)
								if (result === 'heads') {
									headsCount++
								}
								else {
									headsCount = 0
								}
						}
						if (attempts < max){
							resolve(
								console.log(`It took ${attempts} tries to flip five "heads"`)
						)}
						else{
							reject(
								console.log('it took too many attempts Try again!')
							)
						}
				});
		}
		fiveHeads()
				.then( res => console.log(res) )
				.catch( err => console.log(err) );