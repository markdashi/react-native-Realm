/**
 * @providesModule RealmManger
 */

import Realm from 'realm'
import Migrations from 'Migrations'

let realm = new Realm(Migrations[Migrations.length-1]);

//增 改
const insertMovies = (movies) => {
    try {
        realm.write(()=>{
            let oldMovies = realm.objects('Movies');
            let count = oldMovies.length;
            if (oldMovies = null || count == 0){
                realm.create('Movies',movies)
            }else {
                oldMovies[count - 1].count = movies.count;
                oldMovies[count - 1].start = movies.start;
                oldMovies[count - 1].total = movies.total;
                oldMovies[count - 1].title = movies.title;
                oldMovies[count - 1].subjects = movies.subjects;
            }
            
        })
    }
    catch (error){
        console.log(error)
    }
};

//查询
const queryMovies = () =>{
    return realm.objects('Movies')
};

//删除
const deleteMovies = () =>{
    try {
        realm.write(() => {
            realm.delete(realm.objects('Movies'));
        })
    }
    catch (error){
        console.log(error)
    }
};

export {
    insertMovies,
    queryMovies,
    deleteMovies
}
