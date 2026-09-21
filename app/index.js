async function fetchData() {
    try{
        const dataBtn = document.querySelector('.getDataBtn')
      
        const response = await fetch(
            `75b162da8f9146a493d60222261909`
        );
        if(!response.ok){
            throw new Error("could not fetch data")
        }
        const data = await response.json();
    }
    catch(error){
        console.error(error);
    }
    
}

