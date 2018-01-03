/**
 * @providesModule Schemeas
 */

const MoviesSchemea = {
    name:'Movies',
    properties:{
        count:'int',
        start:'int',
        total:'int',
        title:'string',
        subjects: {type:'list',objectType:'Subject'},
    }
};
const subjectSchemea = {
    name:'Subject',
    properties:{
        alt:'string',
        id:'string',
        original_title:'string',
        title:'string',
        year:'string'
    }
};

export {
    MoviesSchemea,
    subjectSchemea
}