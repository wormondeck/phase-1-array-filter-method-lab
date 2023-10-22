function findMatching(drivers, string) {
    return drivers.filter(function(driver) {
      return driver.toLowerCase().indexOf(string.toLowerCase()) !== -1;
    });
  }

  function fuzzyMatch(drivers, string) {
    
    let matches = [];
  
    
    for (let i = 0; i < drivers.length; i++) {
      
      if (drivers[i].startsWith(string)) {
        
        matches.push(drivers[i]);
      }
    }
  
    
    return matches;
  }

  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }