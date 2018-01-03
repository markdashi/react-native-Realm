/**
 * @providesModule RealmPage
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';


import {insertMovies,queryMovies,deleteMovies} from 'RealmManger'

export default class RealmPage extends Component<>{

    static navigationOptions = {
        title:'Realm实战'
    }

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            Movies:[]
        };
      }


    fetchData(){
        let url = 'https://api.douban.com/v2/movie/in_theaters?start=0&count=20'

        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                // console.log(responseData);
                
                insertMovies(responseData)

                this._QueryCacheData()
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {

        this.fetchData()
    }


    render(){
        return(
            <ScrollView>
                <Text style={{textAlign:'center',height:20,fontSize:20}} onPress={()=>{
                    deleteMovies()
                    this.setState({
                        Movies:[]
                    })
                }}>{'删除本地数据'}</Text>
                <Text style={{textAlign:'center',height:20,fontSize:20}} onPress={()=>{

                    this.fetchData()

                    alert('正在获取数据')
                }}>{'获取数据'}</Text>
                {this.state.Movies.length>0?this._renderView():null}
            </ScrollView>
        )
    }


    _QueryCacheData(){

        let movies = queryMovies();
        console.log(movies);
        let count = movies.length;

        if (count > 0){

            this.setState({
                Movies:movies
            })
        }
    }

    _renderView(){

        var Movies = this.state.Movies;
        let count = Movies.length;

        var data = [];

        let listCount = Movies[count-1].subjects.length;

        for (var i =0;i < listCount;i++){
            data.push(
                <TouchableOpacity  key={i}>
                    <Text style={{height:30}}>{Movies[count - 1].subjects[i].original_title}</Text>
                </TouchableOpacity>
            )
        }
        return data
    }

}