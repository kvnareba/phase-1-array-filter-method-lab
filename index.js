const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
const lower = name.toLowerCase()

return drivers.filter(driver => driver.toLowerCase() === lower)


}


function fuzzyMatch(drivers,driverName){
    return drivers.filter(driver => {
        return driver.toLowerCase().indexOf(driverName.toLowerCase()) === 0
        
    })


}       

function matchName(drivers, name){
    return drivers.filter(driver =>{
        return driver.name  === name
    })
}