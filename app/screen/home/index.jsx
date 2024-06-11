import {View, Text, FlatList} from 'react-native';
import{ setData, clearData} from '../../store/reducer/usersReducer'
import ApiLib from "../../lib/ApiLib"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';

export default function HomeScreen(){
    const dispatch = useDispatch()
    const data = useSelector((state) => state.users.data)
    const filter = useSelector((state) => state.users.formFilter)

    const fetchData = async ()=> {
        const res = await ApiLib.post('/action/find', {
            "dataSource": "Cluster0",
            "database": "app-lp3i-mobile",
            "collection": "users",
            "filter": filter
        })

        if(res.data?.documents){
            dispatch(setData(res.data.documents))
        }else{
            dispatch(clearData())
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    return(
        <View>
            <FlatList
                data={data}
                renderItem={({item}) => <Text>{item.email}</Text>} 
            />
        </View>
    );
}