/**
 * name : helper.js
 * author : Vishnu
 * created-date : 12-Jan-2023
 * Description : Programs users related helper functionality.
 */

// Dependencies 

/**
    * ProgramUsersHelper
    * @class
*/
module.exports = class ProgramUsersHelper {
    
    /**
     * find program users details
     * @method
     * @name programUsersDocuments
     * @param {Object} query
     * @param {Array} projection 
     * @returns {JSON} - create programUsers.
    */

    static programUsersDocuments(
        filterData = "all", 
        fieldsArray = "all",
        skipFields = "none"
    ) {
        return new Promise(async (resolve, reject) => {
            try {
                
                let queryObject = (filterData != "all") ? filterData : {};
                let projection = {}
           
                if (fieldsArray != "all") {
                    fieldsArray.forEach(field => {
                        projection[field] = 1;
                   });
               }
               
               if( skipFields !== "none" ) {
                   skipFields.forEach(field=>{
                       projection[field] = 0;
                   });
               }
               
               let programUsers = 
               await database.models.programUsers.find(
                   queryObject, 
                   projection
               ).lean();
           
               return resolve(programUsers);
            
            } catch (error) {
                return reject(error);
            }
        });
    }

    /**
     * check if user joined a program or not
     * @method
     * @name checkForUserJoinedProgramAndConsentShared
     * @param {String} programId
     * @param {String} userId 
     * @returns {Object} - result
    */

    static checkForUserJoinedProgramAndConsentShared(
        programId, 
        userId
    ) {
        return new Promise(async (resolve, reject) => {
            try {
                let result = {};
                const query = { 
                    userId: userId,
                    programId: programId
                }
    
                //Check data present in programUsers collection.
                let programUsers = await this.programUsersDocuments(
                    query,
                    ["_id","consentShared"]
                );
                result.joinProgram = programUsers.length > 0 ? true : false;
                result.consentShared = programUsers.length > 0 ? programUsers[0].consentShared : false;
                return resolve(result);
            
            } catch (error) {
                return reject(error);
            }
        });
    }
}