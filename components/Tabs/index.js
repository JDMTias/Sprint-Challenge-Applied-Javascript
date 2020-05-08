// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


function tabMaker(topicTitle) { 
    const topicTab = document.createElement('div');
    topicTab.textContent = topicTitle;
    topicTab.classList.add('tab')
    
    return topicTab
}


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response);
        const topicArr = response.data.topics
        console.log(topicArr)
        topicArr.forEach(topics => {
            console.log(topics)
            const tab = tabMaker(topics) 
            console.log(tab)
            document.querySelector('.topics').appendChild(tab) 
        });
    })

    .catch(error => {
        console.log(error)
    })
