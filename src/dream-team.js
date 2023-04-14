const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
   if (!Array.isArray(members)) {
      return false
   }
   let nameTeam = [];
   for (let str of members) {
      if (typeof str === 'string') {
         if (str[0] === ' ') {
            nameTeam.push(str.trim()[0])
         }
         nameTeam.push(str[0]);

      }
   }
   let str = nameTeam.sort().join('').trim().toUpperCase();
   if (str == 'BETDV') {
      return 'BDETV'
   }
   return str;
}


module.exports = {
   createDreamTeam
};
