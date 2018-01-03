/**
 * @providesModule Migrations
 */

import {MoviesSchemea,subjectSchemea} from 'Schemeas'

export default[{
    schema:[
        MoviesSchemea,
        subjectSchemea
    ],
    path:'movies.realm',
    schemaVersion:6,
    migration:(oldRealm,newRealm) => {

    }
}]